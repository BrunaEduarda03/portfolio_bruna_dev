import type { CaseStudy } from "./caseStudies";

export const econowiseCase: CaseStudy = {
  "slug": "econowise",
  "projectId": 4,
  "title": "ECONOWISE",
  "kind": "iot",
  "accent": "#96dfb4",
  "category": [
    "Automação · Mobile + IoT",
    "Automation · Mobile + IoT",
    "Automatización · Mobile + IoT"
  ],
  "summary": [
    "Trabalho de conclusão de curso (UFCG): automação de ar-condicionado com ESP32, sensores e um aplicativo React Native, controlando o aparelho por infravermelho através da nuvem Blynk.",
    "UFCG capstone project: air-conditioning automation with an ESP32, sensors and a React Native app, controlling the unit over infrared through the Blynk cloud.",
    "Trabajo de fin de grado (UFCG): automatización de aire acondicionado con ESP32, sensores y una app React Native, controlando el equipo por infrarrojos a través de la nube Blynk."
  ],
  "role": "Software Developer · UFCG / TCC",
  "sourceNote": [
    "Repositório público consultado somente para leitura em https://github.com/BrunaEduarda03/SmartAir em 24/09/2026: README.md, platformio.ini e src/main.cpp. Capturas do aplicativo e diagramas do circuito são as publicadas pela autora no README, sem edição. O código-fonte do aplicativo mobile não está neste repositório (só o firmware); a stack React Native descrita segue o texto do README. Credenciais de exemplo presentes no firmware (Wi-Fi e token do Blynk) não foram reproduzidas aqui.",
    "Public repository reviewed read-only at https://github.com/BrunaEduarda03/SmartAir on 2026-09-24: README.md, platformio.ini and src/main.cpp. App screenshots and circuit diagrams are the ones the author published in the README, unedited. The mobile app source code is not in this repository (only the firmware); the React Native stack described follows the README's own text. Sample credentials present in the firmware (Wi-Fi and Blynk token) were not reproduced here.",
    "Repositorio público consultado solo lectura en https://github.com/BrunaEduarda03/SmartAir el 24/09/2026: README.md, platformio.ini y src/main.cpp. Las capturas de la app y los diagramas del circuito son las publicadas por la autora en el README, sin edición. El código fuente de la app móvil no está en este repositorio (solo el firmware); la stack React Native descrita sigue el texto del README. Las credenciales de ejemplo del firmware (Wi-Fi y token de Blynk) no se reproducen aquí."
  ],
  "challenge": [
    "Conectar uma interface mobile a um aparelho de ar-condicionado físico para controle remoto e monitoramento, reduzindo o consumo de energia, como projeto de conclusão de curso.",
    "Connect a mobile interface to a physical air-conditioning unit for remote control and monitoring, reducing energy consumption, as a capstone project.",
    "Conectar una interfaz móvil a un aire acondicionado físico para control remoto y monitoreo, reduciendo el consumo de energía, como proyecto de fin de grado."
  ],
  "contributions": [
    [
      "Firmware do ESP32 em C++/Arduino: leitura do sensor DHT11, exibição no display OLED SSD1306, contagem de pessoas com sensores TCRT5000 e envio de comandos infravermelhos para o ar-condicionado.",
      "ESP32 firmware in C++/Arduino: reading the DHT11 sensor, displaying data on the SSD1306 OLED, counting people with TCRT5000 sensors and sending infrared commands to the air conditioner.",
      "Firmware del ESP32 en C++/Arduino: lectura del sensor DHT11, visualización en la pantalla OLED SSD1306, conteo de personas con sensores TCRT5000 y envío de comandos infrarrojos al aire acondicionado."
    ],
    [
      "Integração com a nuvem Blynk para telemetria (temperatura, umidade, sensação térmica e número de pessoas) e comandos remotos do aplicativo.",
      "Integration with the Blynk cloud for telemetry (temperature, humidity, heat index and people count) and remote commands from the app.",
      "Integración con la nube Blynk para telemetría (temperatura, humedad, sensación térmica y número de personas) y comandos remotos desde la app."
    ],
    [
      "Aplicativo mobile em React Native, com telas de onboarding, autenticação, painel de aparelhos, controle do ar-condicionado, configuração de rede e menu, conforme descrito pela autora no repositório.",
      "Mobile app in React Native, with onboarding, authentication, device panel, air-conditioning control, network setup and menu screens, as described by the author in the repository.",
      "Aplicación móvil en React Native, con pantallas de onboarding, autenticación, panel de dispositivos, control del aire acondicionado, configuración de red y menú, según lo descrito por la autora en el repositorio."
    ]
  ],
  "layers": [
    { "name": "Firmware", "tech": "ESP32 · Arduino (C++) · PlatformIO", "detail": ["Confirmado em platformio.ini (framework Arduino, board esp32dev) e src/main.cpp.", "Confirmed in platformio.ini (Arduino framework, esp32dev board) and src/main.cpp.", "Confirmado en platformio.ini (framework Arduino, placa esp32dev) y src/main.cpp."], "evidence": "repository" },
    { "name": "Sensores / display", "tech": "DHT11 · TCRT5000 · Display OLED SSD1306", "detail": ["Temperatura, umidade e sensação térmica exibidas no display; par de sensores TCRT5000 conta entradas e saídas de pessoas.", "Temperature, humidity and heat index shown on the display; a pair of TCRT5000 sensors counts people entering and leaving.", "Temperatura, humedad y sensación térmica mostradas en la pantalla; un par de sensores TCRT5000 cuenta entradas y salidas de personas."], "evidence": "repository" },
    { "name": "Controle do ar-condicionado", "tech": "IRremoteESP8266 · IRsend", "detail": ["Códigos infravermelhos RAW capturados para ligar/desligar e para cada temperatura entre 16°C e 32°C de um aparelho específico.", "Raw infrared codes captured to turn the unit on/off and for each temperature between 16°C and 32°C of a specific unit.", "Códigos infrarrojos RAW capturados para encender/apagar y para cada temperatura entre 16°C y 32°C de un equipo específico."], "evidence": "repository" },
    { "name": "Conectividade / nuvem", "tech": "Blynk (plataforma IoT) · Wi-Fi", "detail": ["BlynkTimer envia telemetria a cada 1s por pinos virtuais; comandos de liga/desliga e temperatura chegam do app pelos mesmos pinos. Não há servidor HTTP próprio no firmware.", "BlynkTimer sends telemetry every 1s over virtual pins; on/off and temperature commands arrive from the app through the same pins. There is no custom HTTP server in the firmware.", "BlynkTimer envía telemetría cada 1s por pines virtuales; los comandos de encendido y temperatura llegan de la app por los mismos pines. No hay servidor HTTP propio en el firmware."], "evidence": "repository" },
    { "name": "Aplicativo mobile", "tech": "React Native CLI · TypeScript · React Navigation · Axios", "detail": ["Stack descrita pela autora no README do repositório; o código-fonte do aplicativo não está neste repositório, que contém apenas o firmware.", "Stack described by the author in the repository README; the app's source code is not in this repository, which only contains the firmware.", "Stack descrita por la autora en el README del repositorio; el código fuente de la app no está en este repositorio, que solo contiene el firmware."], "evidence": "public" },
    { "name": "Estado do app", "tech": "Context API · AsyncStorage", "detail": ["Gerenciamento de estado e persistência local do aplicativo, conforme descrito no README.", "App state management and local persistence, as described in the README.", "Gestión de estado y persistencia local de la app, según lo descrito en el README."], "evidence": "public" }
  ],
  "decisions": [
    { "title": ["Telemetria por nuvem, não por servidor próprio", "Cloud telemetry, not a custom server", "Telemetría en la nube, no un servidor propio"], "detail": ["O firmware usa a plataforma Blynk (pinos virtuais e BlynkTimer) para enviar dados e receber comandos. Não há WebServer nem WebSocket próprio no código; MQTT não é usado.", "The firmware uses the Blynk platform (virtual pins and BlynkTimer) to send data and receive commands. There is no custom WebServer or WebSocket in the code; MQTT is not used.", "El firmware usa la plataforma Blynk (pines virtuales y BlynkTimer) para enviar datos y recibir comandos. No hay WebServer ni WebSocket propio en el código; no se usa MQTT."], "evidence": "repository" },
    { "title": ["Controle por códigos IR gravados para um aparelho", "Control via IR codes recorded for one unit", "Control por códigos IR grabados para un equipo"], "detail": ["Os comandos infravermelhos são códigos RAW capturados especificamente para um ar-condicionado real, um por temperatura. A solução não usa uma biblioteca de protocolo genérico e não generaliza automaticamente para outras marcas.", "Infrared commands are raw codes captured specifically for one real air conditioner, one per temperature. The solution does not use a generic protocol library and does not automatically generalize to other brands.", "Los comandos infrarrojos son códigos RAW capturados específicamente para un aire acondicionado real, uno por temperatura. La solución no usa una librería de protocolo genérico y no generaliza automáticamente a otras marcas."], "evidence": "repository" },
    { "title": ["Contagem de pessoas por par de sensores", "People counting with a sensor pair", "Conteo de personas con un par de sensores"], "detail": ["A ordem em que os dois sensores TCRT5000 são cobertos define se uma pessoa entrou ou saiu do ambiente, incrementando ou decrementando o contador exibido no display.", "The order in which the two TCRT5000 sensors are covered determines whether a person entered or left the room, incrementing or decrementing the counter shown on the display.", "El orden en que se cubren los dos sensores TCRT5000 determina si una persona entró o salió del ambiente, incrementando o disminuyendo el contador mostrado en la pantalla."], "evidence": "repository" }
  ],
  "pending": [
    [
      "Confirmar o código-fonte do aplicativo mobile; este repositório contém apenas o firmware, e a stack React Native é descrita somente no README.",
      "Confirm the mobile app source code; this repository only contains the firmware, and the React Native stack is described only in the README.",
      "Confirmar el código fuente de la app móvil; este repositorio solo contiene el firmware, y la stack React Native se describe solo en el README."
    ],
    [
      "Validar o funcionamento com outros modelos de ar-condicionado; os códigos RAW no firmware foram capturados para um aparelho específico.",
      "Validate operation with other air-conditioner models; the RAW codes in the firmware were captured for one specific unit.",
      "Validar el funcionamiento con otros modelos de aire acondicionado; los códigos RAW del firmware fueron capturados para un equipo específico."
    ],
    [
      "Adicionar testes automatizados (Jest no app, testes de unidade no firmware); nenhum teste foi encontrado no repositório.",
      "Add automated tests (Jest in the app, unit tests in the firmware); no tests were found in the repository.",
      "Añadir pruebas automatizadas (Jest en la app, pruebas unitarias en el firmware); no se encontraron pruebas en el repositorio."
    ],
    [
      "Confirmar dados reais de consumo de energia e o ganho de otimização citado nos objetivos do projeto.",
      "Confirm real energy consumption data and the optimization gains mentioned in the project's goals.",
      "Confirmar datos reales de consumo de energía y la mejora de optimización mencionada en los objetivos del proyecto."
    ]
  ],
  "sources": [
    { "label": "SmartAir · repositório (GitHub)", "url": "https://github.com/BrunaEduarda03/SmartAir" }
  ],
  "gallery": {
    "id": "econowise",
    "title": [
      "ECONOWISE · Aplicativo",
      "ECONOWISE · App",
      "ECONOWISE · App"
    ],
    "url": "https://github.com/BrunaEduarda03/SmartAir",
    "portrait": true,
    "features": [
      {
        "title": ["Abertura e onboarding", "Splash and onboarding", "Apertura y onboarding"],
        "description": [
          "Telas de abertura e apresentação do EconoWise, guiando a pessoa usuária pela proposta de automatizar e otimizar o consumo do ar-condicionado.",
          "Splash and introduction screens for EconoWise, guiding the user through the idea of automating and optimizing air-conditioning use.",
          "Pantallas de apertura y presentación de EconoWise, guiando a la persona usuaria por la propuesta de automatizar y optimizar el consumo del aire acondicionado."
        ],
        "image": "/cases/econowise/splash.png",
        "secondaryImage": "/cases/econowise/onboarding.png",
        "secondaryImageTitle": ["Onboarding", "Onboarding", "Onboarding"],
        "tags": ["React Native", "TypeScript"]
      },
      {
        "title": ["Autenticação", "Authentication", "Autenticación"],
        "description": [
          "Login e cadastro com usuário e senha para acessar o aplicativo.",
          "Login and sign-up with username and password to access the app.",
          "Inicio de sesión y registro con usuario y contraseña para acceder a la app."
        ],
        "image": "/cases/econowise/auth.png",
        "tags": ["React Navigation", "Context API"]
      },
      {
        "title": ["Painel de aparelhos", "Device panel", "Panel de dispositivos"],
        "description": [
          "Lista os ares-condicionados cadastrados, com status ativo/inativo e filtros por todos, individuais ou grupos.",
          "Lists the registered air conditioners, with active/inactive status and filters for all, individual or groups.",
          "Lista los aires acondicionados registrados, con estado activo/inactivo y filtros por todos, individuales o grupos."
        ],
        "image": "/cases/econowise/home.png",
        "tags": ["Axios", "AsyncStorage"]
      },
      {
        "title": ["Controle do ar-condicionado", "Air-conditioning control", "Control del aire acondicionado"],
        "description": [
          "Liga/desliga, temperatura desejada, velocidade da ventilação e modo, enviados ao ESP32 por infravermelho através da Blynk.",
          "Power, desired temperature, fan speed and mode, sent to the ESP32 over infrared through Blynk.",
          "Encendido, temperatura deseada, velocidad del ventilador y modo, enviados al ESP32 por infrarrojos a través de Blynk."
        ],
        "image": "/cases/econowise/device.png",
        "tags": ["IRremoteESP8266", "Blynk"]
      },
      {
        "title": ["Rede e menu", "Network and menu", "Red y menú"],
        "description": [
          "Configuração da rede Wi-Fi do dispositivo, necessária para o aplicativo alcançar os aparelhos da casa, e menu com perfil e configurações.",
          "Wi-Fi setup for the device, required for the app to reach the home's appliances, and a menu with profile and settings.",
          "Configuración de la red Wi-Fi del dispositivo, necesaria para que la app alcance los aparatos de la casa, y menú con perfil y ajustes."
        ],
        "image": "/cases/econowise/network.png",
        "secondaryImage": "/cases/econowise/menu.png",
        "secondaryImageTitle": ["Menu", "Menu", "Menú"],
        "tags": ["ESP32", "Wi-Fi"]
      },
      {
        "title": ["Esquemático do circuito", "Circuit schematic", "Esquema del circuito"],
        "description": [
          "Diagrama de ligação do ESP32 com o display OLED, o sensor DHT11, os sensores de presença e o emissor infravermelho, publicado no repositório.",
          "Wiring diagram of the ESP32 with the OLED display, the DHT11 sensor, the presence sensors and the infrared emitter, published in the repository.",
          "Diagrama de conexión del ESP32 con la pantalla OLED, el sensor DHT11, los sensores de presencia y el emisor infrarrojo, publicado en el repositorio."
        ],
        "image": "/cases/econowise/schematic.png",
        "tags": ["ESP32", "DHT11", "IR LED"]
      },
      {
        "title": ["Montagem do circuito", "Circuit assembly", "Montaje del circuito"],
        "description": [
          "Montagem física do circuito em protoboard, publicada no repositório.",
          "Physical breadboard assembly of the circuit, published in the repository.",
          "Montaje físico del circuito en protoboard, publicado en el repositorio."
        ],
        "image": "/cases/econowise/circuit.jpg",
        "tags": ["Protoboard", "Hardware"]
      }
    ]
  }
};
