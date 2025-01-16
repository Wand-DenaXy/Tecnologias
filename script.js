let Mudar = [
    // Grupo 1
    "imagens/bomdia11.png",
    "imagens/crm-strategy.webp",
    "imagens/The-Significance-of-Soft-Skills-in-the-Workplace-7-Compelling-Reasons.jpg",
    
    // Grupo 2
    "imagens/ad5614dd2a781748094e5d3c809a6d02.webp",
    "imagens2/istockphoto-1279249697-1024x1024.jpg",
    "imagens/WMS.webp",
    
    // Grupo 3
    "imagens2/HRm.png",
    "imagens2/BigData.jpg",
    "imagens2/Cibersecurity.jpg",
    
    // Grupo 4
    "imagens2/AI.webp",
    "imagens2/iot.jpg",
    "imagens2/IIoT.png",
    
    // Grupo 5
    "imagens2/AR.avif",
    "imagens2/VR.jpg",
    "imagens2/B2B.webp",
    
    // Grupo 6
    "imagens2/B2C.png",
    "imagens2/h2h.png",
    "imagens2/nfc-aplicacoes.webp",
    
    // Grupo 7
    "imagens2/RFID.webp",
    "imagens2/bar-code.webp",
    "imagens2/unnamed.png",
    
    // Grupo 8
    "imagens2/blockchain(1).jpg",
    "imagens2/DataScience.webp",
    "imagens2/CloudComputing.jpg",
    "imagens2/DeepLearning.webp"
];

// Textos correspondentes às imagens
let textos = [
    "ERP",
    "CRM",
    "Soft skills",
    "MES",
    "SCM",
    "WMS",
    "HRM",
    "BIG DATA",
    "Cibersecurity",
    "IA",
    "IOT",
    "IIOT",
    "AR",
    "VR",
    "B2B",
    "B2C",
    "H2H",
    "NFC",
    "RFID",
    "BAR CODE",
    "QR CODE",
    "Blockchain",
    "Data Science",
    "Cloud Computing",
    "Deep Learning"
];

let imagemAtual = 0;
let imagemAtual2 = 3;
let imagemAtual3 = 6; 
let imagemAtual4 = 9; 
let imagemAtual5 = 12; 
let imagemAtual6 = 15; 
let imagemAtual7 = 18; 
let imagemAtual8 = 21;

setInterval(() => {
    // Incrementa os índices
    imagemAtual++;
    imagemAtual2++;
    imagemAtual3++;
    imagemAtual4++;
    imagemAtual5++;
    imagemAtual6++;
    imagemAtual7++;
    imagemAtual8++;

    // Reinício para os grupos de imagens
    if (imagemAtual >= 3) { // Grupo 1
        imagemAtual = 0;
    }
    if (imagemAtual2 >= 6) { // Grupo 2
        imagemAtual2 = 3;
    }
    if (imagemAtual3 >= 9) { // Grupo 3
        imagemAtual3 = 6;
    }
    if (imagemAtual4 >= 12) { // Grupo 4
        imagemAtual4 = 9;
    }
    if (imagemAtual5 >= 15) { // Grupo 5
        imagemAtual5 = 12;
    }
    if (imagemAtual6 >= 18) { // Grupo 6
        imagemAtual6 = 15;
    }
    if (imagemAtual7 >= 21) { // Grupo 7
        imagemAtual7 = 18;
    }
    if (imagemAtual8 >= 25) { // Grupo 8
        imagemAtual8 = 21;
    }

    // Atualiza as imagens no DOM
    document.querySelector('#imagens-grupo1').src = Mudar[imagemAtual];
    document.querySelector('#texto-imagem1').textContent = textos[imagemAtual]; // Texto para Grupo 1
    
    document.querySelector('#imagens-grupo2').src = Mudar[imagemAtual2];
    document.querySelector('#texto-imagem2').textContent = textos[imagemAtual2]; // Texto para Grupo 2
    
    document.querySelector('#imagens-grupo3').src = Mudar[imagemAtual3];
    document.querySelector('#texto-imagem3').textContent = textos[imagemAtual3]; // Texto para Grupo 3
    
    document.querySelector('#imagens-grupo4').src = Mudar[imagemAtual4];
    document.querySelector('#texto-imagem4').textContent = textos[imagemAtual4]; // Texto para Grupo 4
    
    document.querySelector('#imagens-grupo5').src = Mudar[imagemAtual5];
    document.querySelector('#texto-imagem5').textContent = textos[imagemAtual5]; // Texto para Grupo 5
    
    document.querySelector('#imagens-grupo6').src = Mudar[imagemAtual6];
    document.querySelector('#texto-imagem6').textContent = textos[imagemAtual6]; // Texto para Grupo 6
    
    document.querySelector('#imagens-grupo7').src = Mudar[imagemAtual7];
    document.querySelector('#texto-imagem7').textContent = textos[imagemAtual7]; // Texto para Grupo 7
    
    document.querySelector('#imagens-grupo8').src = Mudar[imagemAtual8];
    document.querySelector('#texto-imagem8').textContent = textos[imagemAtual8]; // Texto para Grupo 8
    
}, 4000);


document.querySelector('.texto-com-popup').style


