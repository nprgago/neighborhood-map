
// Initial Info
export const inital = {
  token: 'pk.eyJ1IjoibnByZ2FnbyIsImEiOiJjams1aWRlYmQxanltM2xrY2FzMHd3dGF4In0.QnVlOExkTyGpbVgALUGUJg',
  coordinates: {
    lat: -8.642,
    lng: 40.641
  },
  zoom: 13.6,
  style: 'mapbox://styles/nprgago/cjkssrgdh0ppt2rqixhegc3na'
}

var markerHeight = 50, markerRadius = 10, linearOffset = 25

export const popUps = {
  offset: {
    'top': [0, 0],
    'top-left': [0,0],
    'top-right': [0, -markerHeight],
    'bottom': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight- markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
  },
  className: 'my-class'
}

export const markers = [
  {
    id: 1,
    title: "Sé de Aveiro",
    description:"A Sé de Aveiro situa-se no antigo convento dominicano, conhecido por ter sido a primeira comunidade religiosa a instalar-se na cidade. A igreja chama de imediato a atenção pela soberba fachada, com as suas imagens das Virtudes Humanas e a imponente torre sineira.",
    website:"http://www.paroquiagloria.org/ ",
    src:"http://paroquiagloria.org/v2/wp-content/uploads/2018/07/sacrario-mosteiro-sao-bento.jpg",
    coordinates: {
      lat: 40.639758,
      lng: -8.650189
    }
  },
  {
    id: 2,
    title: "Museu de Aveiro",
    description:"O Museu de Aveiro, popularmente conhecido como Museu Santa Joana, localiza-se na Avenida Santa Joana, perto da sé Catedral de Aveiro, no Concelho e distrito de Aveiro, em Portugal.",
    website:"http://www.patrimoniocultural.gov.pt/pt/museus-e-monumentos/rede-portuguesa/m/museu-de-aveiro/",
    src:"http://www.radioboanova.pt/file/2018/05/museu-bobadela-500x500_c.jpg",
    coordinates: {
      lat: 40.639444,
      lng: -8.651037
    }
  },
  {
    id: 3,
    title: "Parque Infante D. Pedro – Parque da Cidade",
    description:"O parque Infante D. Pedro, construído na antiga propriedade dos frades franciscanos, foi preparado a partir de 1862 na zona que pertencia ao Convento de Santo António. Aproveitou-se a ribeira que atravessava o parque para se desenvolver um espaço com lagos e fontes inserido no arvoredo envolvente.",
    website:"https://www.facebook.com/pages/Parque-Infante-D-Pedro/155451411188834",
    src:"http://media.rotabairrada.grupoma.eu/irt/1521/Parque%20D.%20Pedro%20V%20-%20Casa%20de%20Ch%C3%A1.jpg",
    coordinates: {
      lat: 40.636422,
      lng: -8.653071
    }
  },
  {
    id: 4,
    title: " Museu da Cidade de Aveiro",
    description:"Concebido num conceito de museu participativo, envolvendo diretamente a comunidade na construção dos conteúdos museológicos, pretende ilustrar os momentos, os factos e os protagonistas que, ao longo do tempo, têm dado alma à história de Aveiro.",
    website:"http://mca.cm-aveiro.pt/rede-de-museus/museu-da-cidade/",
    src:"http://media.rotabairrada.grupoma.eu/irt/1587/Vista%20do%20Museu%20da%20Cidade%20e%20da%20Rota%20da%20Luz.jpg",
    coordinates: {
      lat: 40.641748,
      lng: -8.654506
    }
  },
  {
    id: 5,
    title: "Museu da Arte Nova",
    description:"O Museu Arte Nova de Aveiro, sedeado num dos imóveis mais emblemáticos entre o património desta corrente artística, é o centro interpretativo da extensa rede de motivos Arte Nova disseminados por toda a cidade de Aveiro.",
    website:"http://mca.cm-aveiro.pt/rede-de-museus/museu-arte-nova/",
    src:"http://www.viajecomigo.com/wp-content/uploads/2016/07/Edif%C3%ADcio-do-Museu-de-Arte-Nova-de-Aveiro-%C2%A9-Viaje-Comigo.jpg",
    coordinates: {
      lat: 40.641954,
      lng: -8.655422
    }
  },
  {
    id: 6,
    title: "Passadiços da Ria de Aveiro",
    description:"Inaugurados a 1 de Julho de 2018 com uma extensão de 7,5km no Municipio de Aveiro, esta Via Ecológica Ciclável liga o Canal de São Roque (no centro da Cidade) a Vilarinho (na margem sul do Rio Novo do Princípe, Cacia).",
    website:"http://www.cm-aveiro.pt/www/Templates/TONewDetail.aspx?id_object=47419&indexnew=1",
    src:"https://cdn.olhares.pt/client/files/foto/big/934/9343835.jpg",
    coordinates: {
      lat: 40.647482,
      lng: -8.650835
    }
  },
  {
    id: 7,
    title: "Universidade de Aveiro",
    description:"Criada em 1973, rapidamente se transformou numa das mais dinâmicas e inovadoras universidades do país. Frequentada por cerca de 15.000 alunos em programas de graduação e pós-graduação, a UA desde cedo assumiu um papel de relevância no panorama universitário do país.",
    website:"https://www.ua.pt",
    src:"http://www.diarioaveiro.pt/files/news/5a8daa6269722.png",
    coordinates: {
      lat: 40.630356,
      lng: -8.657492
    }
  },
  {
    id: 8,
    title: "Estação de Comboios de Aveiro",
    description:"A Estação Ferroviária de Aveiro é uma interface ferroviária da Linha do Norte, que funciona como entroncamento com o Ramal de Aveiro, e que serve a localidade de Aveiro, em Portugal.",
    website:"https://pt.wikipedia.org/wiki/Esta%C3%A7%C3%A3o_Ferrovi%C3%A1ria_de_Aveiro",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Old_station_of_Aveiro.jpg/1200px-Old_station_of_Aveiro.jpg",
    coordinates: {
      lat: 40.643704,
      lng: -8.640550
    }
  },
  {
    id: 9,
    title: "Salinas de Aveiro",
    description:"As salinas de Aveiro são um dos pontos principais da história de Aveiro. Neste passeio poderá não só apreciar a beleza das Salinas, mas apreciar as aves que junto a elas habitam, apreciar a trabalho dos marnotos, apanhar salicórnia e contactar com os marnotos que ainda hoje se dedicam a esta atividade secular. ",
    website:"https://salinasaveiro.com/",
    src:"http://media.rotabairrada.grupoma.eu/irt/1628/Salinas%20C.jpg",
    coordinates: {
      lat: 40.645017,
      lng: -8.662710
    }
  },
  {
    id: 10,
    title: "Cais da Ribeira de Esgueira",
    description:"Localizado em Vera Cruz, na periferia da cidade, este ainda é um lugar desconhecido, ideal para fotografar um belo nascer do sol ou pôr do sol, para andar de bicicleta ou fazer jogging. É um lugar dedicado à observação da Ria, sua fauna e flora.",
    website:"http://www.riadeaveiro.pt/diretorio/poi/cais-da-ribeira-de-esgueira/",
    src:"https://www.efreguesias.pt/documents/20194/0/12037992_962641593807582_5328484697136491373_n.jpg/7f35ba19-2bb6-4322-b229-319ba23fcbb1?t=1447843747369",
    coordinates: {
      lat: 40.657553,
      lng: -8.636412
    }
  }
]