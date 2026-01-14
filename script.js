function app() {
    return {
        loja: loja,
        cardapio: cardapio,
        
        activeCategory: null, // Para controle das abas
        
        modalOpen: false,
        cartOpen: false,
        paymentOpen: false, // Nova tela de pagamento
        paymentMethod: 'pix', // 'pix' or 'card'
        cardType: '', // 'credito' or 'debito'
        
        activeItem: null,
        itemQuantity: 1,
        itemObs: '',
        
        cart: [],
        customerName: '',
        customerPhone: '',
        customerAddress: '',
        checkoutError: '',

        init() {

            const savedCart = localStorage.getItem('burgerCart');
            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }


            if (this.cardapio && this.cardapio.length > 0) {
                this.activeCategory = this.cardapio[0].categoria;
            }
        },

        openItemModal(item) {
            this.activeItem = item;
            this.itemQuantity = 1;
            this.itemObs = '';
            this.modalOpen = true;
        },

        addToCart(item, quantity = 1, obs = '') {

            const existingItemIndex = this.cart.findIndex(i => 
                i.id === item.id && i.obs === obs
            );

            if (existingItemIndex > -1) {
                this.cart[existingItemIndex].quantidade += quantity;
            } else {
                this.cart.push({
                    ...item,
                    quantidade: quantity,
                    obs: obs
                });
            }

            this.saveCart();

        },


        getItemQuantity(itemId) {
            const item = this.cart.find(i => i.id === itemId);
            return item ? item.quantidade : 0;
        },


        addOne(item) {
            this.addToCart(item, 1);
        },


        removeOne(item) {
            const index = this.cart.findIndex(i => i.id === item.id);
            if (index > -1) {
                if (this.cart[index].quantidade > 1) {
                    this.cart[index].quantidade--;
                } else {
                    this.cart.splice(index, 1);
                }
                this.saveCart();
            }
        },

        saveCart() {
            localStorage.setItem('burgerCart', JSON.stringify(this.cart));
        },

        get cartTotalItems() {
            return this.cart.reduce((acc, item) => acc + item.quantidade, 0);
        },

        get cartTotalValue() {
            return this.cart.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
        },

        formatMoney(value) {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        },

        slugify(text) {
            return text.toString().toLowerCase()
                .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                .replace(/\s+/g, '-')           
                .replace(/[^\w\-]+/g, '')       
                .replace(/\-\-+/g, '-')         
                .replace(/^-+/, '')             
                .replace(/-+$/, '');            
        },

        removeFromCart(index) {
            this.cart.splice(index, 1);
            this.saveCart();
            if (this.cart.length === 0) {
                this.cartOpen = false;
            }
        },

        openPayment() {
            this.cartOpen = false;
            this.paymentOpen = true;
            this.paymentMethod = 'pix';
        },

        checkout() {
            if (!this.customerName.trim()) {
                this.checkoutError = 'Por favor, informe seu nome.';
                return;
            }
            if (!this.customerPhone.trim()) {
                this.checkoutError = 'Por favor, informe seu telefone.';
                return;
            }
            if (!this.customerAddress.trim()) {
                this.checkoutError = 'Por favor, informe o endereço de entrega.';
                return;
            }
            

            if (this.paymentMethod === 'card' && !this.cardType) {
                this.checkoutError = 'Selecione o tipo de cartão (Crédito ou Débito).';
                return;
            }

            this.checkoutError = '';

            const orderId = Math.floor(Math.random() * 9000) + 1000;
            const now = new Date();
            const dateStr = now.toLocaleDateString('pt-BR');
            const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

            const subtotal = this.cartTotalValue;
            const deliveryFee = this.loja.taxa_entrega || 0;
            const total = subtotal + deliveryFee;

            let message = `#### NOVO PEDIDO ####\n\n`;
            message += `#️⃣   Nº pedido: ${orderId}\n`;
            message += `feito em ${dateStr} ${timeStr}\n\n`;
            
            message += `👤   ${this.customerName}\n`;
            message += `📞   ${this.customerPhone}\n\n`;
            
            message += `🛵   Endereço de entrega\n`;
            message += `${this.customerAddress}\n`;
            message += `Link do endereço:\n\n\n`;
            
            message += `------- ITENS DO PEDIDO -------\n\n`;
            
            this.cart.forEach(item => {
                const itemTotal = item.preco * item.quantidade;
                

                let itemEmoji = '🍔'; 
                const nomeLower = item.nome.toLowerCase();
                if (nomeLower.includes('batata') || nomeLower.includes('fritas')) itemEmoji = '🍟';
                else if (nomeLower.includes('coca') || nomeLower.includes('refri') || nomeLower.includes('suco') || nomeLower.includes('agua')) itemEmoji = '🥤';
                else if (nomeLower.includes('pudim') || nomeLower.includes('brownie') || nomeLower.includes('shake')) itemEmoji = '🍨';

                message += `* ${item.quantidade} x ${item.nome} ( ${itemEmoji} ${item.quantidade} itens + ${itemEmoji} ... ). *\n`; 
                
                
            });
            

            this.cart.forEach(item => {
                 message += `* ${item.quantidade} x ${item.nome} *\n`;

                 
                 if (item.obs) {
                    message += `   ❗ OBS ITEM: ${item.obs}\n`;
                 }
                 message += ` 💵 ${item.quantidade} x ${this.formatMoney(item.preco)} = ${this.formatMoney(item.preco * item.quantidade)}\n\n`;
            });

            if (this.orderObservation.trim()) {
                message += `📝 OBSERVAÇÕES DO PEDIDO:\n${this.orderObservation}\n\n`;
            }

            message += `-------------------------------\n\n`;
            message += `SUBTOTAL: ${this.formatMoney(subtotal)}\n`;
            message += `ENTREGA: ${this.formatMoney(deliveryFee)}\n`;
            message += `* VALOR FINAL: ${this.formatMoney(total)} *\n\n`;
            
            message += `PAGAMENTO\n`;
            if (this.paymentMethod === 'pix') {
                message += `* PIX *: ${this.formatMoney(total)}\n`;
            } else {
                message += `* Cartão de ${this.cardType === 'credit' ? 'crédito' : 'débito'} *: ${this.formatMoney(total)}\n`;
            }

            if (this.loja.tempo_estimado_entrega) {
                 message += `\n🕐   Prazo para entrega: ${this.loja.tempo_estimado_entrega}`;
            }

            const encodedMessage = encodeURIComponent(message);
            let phone = this.loja.telefone.replace(/\D/g, '');
            if (phone.length === 11) {
                phone = '55' + phone;
            }
            
            window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
            

        }
    }
}
