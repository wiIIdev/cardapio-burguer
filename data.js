const loja = {
    nome: "Rei do Burguer",
    logo: "https://ui-avatars.com/api/?name=12KG+Burger&background=ORANGE&color=fff&size=128",
    telefone: "11916166623",
    endereco: "Rua dos Hambúrgueres, 123 - Centro",
    cor_tema: "orange-500",
    mensagem_saudacao: "Olá! Gostaria de fazer um pedido.",
    horario_funcionamento: "Terça a Domingo das 18h às 23h",
    taxa_entrega: 5.00, 
    tempo_estimado_entrega: "40 min" 
};

const cardapio = [
    {
        categoria: "Destaques da Casa",
        itens: [
            {
                id: 1,
                nome: "X-Bacon Supremo",
                descricao: "Pão brioche, burger 180g, queijo cheddar, muito bacon crocante e maionese da casa.",
                preco: 32.90,
                imagem: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80"
            },
            {
                id: 2,
                nome: "Duplo Cheddar Melt",
                descricao: "Pão australiano, dois burgers de 150g, dobro de cheddar cremoso e cebola caramelizada.",
                preco: 38.50,
                imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80"
            },
            {
                id: 101,
                nome: "Combo Casal",
                descricao: "2 Burgers Clássicos + 1 Porção de Batata Grande + 2 Refrigerantes Lata.",
                preco: 75.00,
                imagem: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&q=80"
            }
        ]
    },
    {
        categoria: "Entradas",
        itens: [
            {
                id: 201,
                nome: "Batata Frita Rústica",
                descricao: "Batatas cortadas à mão com alecrim e alho.",
                preco: 18.00,
                imagem: "https://images.unsplash.com/photo-1573080496987-aeb4d9170d5c?w=500&q=80"
            },
            {
                id: 202,
                nome: "Batata com Cheddar e Bacon",
                descricao: "Nossa batata crocante coberta com cheddar cremoso e farofa de bacon.",
                preco: 24.00,
                imagem: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&q=80"
            },
            {
                id: 203,
                nome: "Onion Rings",
                descricao: "Anéis de cebola empanados e crocantes. Acompanha molho barbecue.",
                preco: 16.00,
                imagem: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&q=80"
            },
            {
                id: 204,
                nome: "Dadinhos de Tapioca",
                descricao: "10 unidades, acompanha geleia de pimenta.",
                preco: 22.00,
                imagem: "https://images.unsplash.com/photo-1626083398935-716447c23490?w=500&q=80"
            }
        ]
    },


    
    {
        categoria: "Hambúrgueres Artesanais",
        itens: [
            {
                id: 3,
                nome: "Clássico Salad",
                descricao: "Pão, burger 150g, queijo prato, alface americana, tomate, cebola roxa e picles.",
                preco: 28.00,
                imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80"
            },
            {
                id: 4,
                nome: "Smash Simples",
                descricao: "Pão, smash burger 90g, queijo cheddar. Ideal para quem tem pouca fome.",
                preco: 18.00,
                imagem: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&q=80"
            },
            {
                id: 301,
                nome: "Chicken Crispy",
                descricao: "Pão brioche, sobrecoxa de frango empanada crocante, alface e maionese de limão.",
                preco: 26.00,
                imagem: "https://images.unsplash.com/photo-1615557960916-5f4791effe9d?w=500&q=80"
            },
            {
                id: 302,
                nome: "Veggie Future",
                descricao: "Pão integral, burger de plantas (115g), queijo vegano, rúcula e tomate seco.",
                preco: 34.00,
                imagem: "https://images.unsplash.com/photo-1520072959219-c595dc3f3a2f?w=500&q=80"
            },
            {
                id: 303,
                nome: "Monster Egg",
                descricao: "Pão, burger 180g, ovo, bacon, queijo prato e salada completa.",
                preco: 35.00,
                imagem: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?w=500&q=80"
            }
        ]
    },
    {
        categoria: "Bebidas",
        itens: [
            {
                id: 5,
                nome: "Coca-Cola Lata",
                descricao: "350ml",
                preco: 6.00,
                imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80"
            },
            {
                id: 6,
                nome: "Guaraná Antarctica",
                descricao: "Lata 350ml",
                preco: 6.00,
                imagem: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=500&q=80"
            },
            {
                id: 401,
                nome: "Suco de Laranja",
                descricao: "Natural 400ml",
                preco: 10.00,
                imagem: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80"
            },
            {
                id: 402,
                nome: "Água Mineral",
                descricao: "500ml",
                preco: 4.00,
                imagem: "https://images.unsplash.com/photo-1560697529-722a4d334057?w=500&q=80"
            }
        ]
    },



    
    {
        categoria: "Sobremesas",
        itens: [
            {
                id: 501,
                nome: "Brownie com Sorvete",
                descricao: "Brownie de chocolate meio amargo com bola de sorvete de creme.",
                preco: 18.00,
                imagem: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&q=80"
            },
            {
                id: 502,
                nome: "Milkshake de Morango",
                descricao: "400ml, feito com sorvete artesanal e calda de morango.",
                preco: 22.00,
                imagem: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=500&q=80"
            },
            {
                id: 503,
                nome: "Pudim de Leite",
                descricao: "Fatia generosa do nosso pudim caseiro.",
                preco: 12.00,
                imagem: "https://images.unsplash.com/photo-1517594503-461099684305?w=500&q=80"
            }
        ]
    }
];
