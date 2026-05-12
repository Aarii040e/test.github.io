window.CIBER_TEXTS = {
  defaultLang: "es",

  ui: {
    es: {
      documentTitle: "Inicio · Tips de Ciberseguridad",
      metaDescription: "Biblioteca interna de tips de ciberseguridad de Copreci.",
      brandSubtitle: "Concienciación en ciberseguridad",
      headerLabel: "BIBLIOTECA DE TIPS",
      navTitle: "Índice de contenidos",
      searchPlaceholder: "Buscar tip, código o tema...",
      introTitle: "Tips de ciberseguridad",
      introText: "Selecciona un apartado en la barra lateral y elige el idioma. El contenido se abrirá aquí mismo, usando los archivos HTML de esta carpeta.",
      noSelectionTitle: "Selecciona un contenido",
      noSelectionText: "Los apartados se despliegan por tema, subpunto e idioma.",
      viewerNoSelection: "Ningún tip seleccionado",
      viewerNoSelectionMeta: "Elige un idioma desde el índice o desde una tarjeta.",
      openTab: "Abrir en pestaña",
      contentLanguage: "Idioma",
      fileLabel: "Archivo",
      footerText: "Biblioteca interna de tips de ciberseguridad · Copreci S. Coop.",
      languageNames: {
        ES: "Español",
        EN: "English",
        EU: "Euskera"
      }
    },
    en: {
      documentTitle: "Home · Cybersecurity Tips",
      metaDescription: "Internal Copreci cybersecurity tips library.",
      brandSubtitle: "Cybersecurity awareness",
      headerLabel: "TIPS LIBRARY",
      navTitle: "Content index",
      searchPlaceholder: "Search tip, code or topic...",
      introTitle: "Cybersecurity tips",
      introText: "Select a section in the side navigation and choose the language. The content will open here using the HTML files in this folder.",
      noSelectionTitle: "Select content",
      noSelectionText: "Sections expand by topic, subtopic and language.",
      viewerNoSelection: "No tip selected",
      viewerNoSelectionMeta: "Choose a language from the index or from a card.",
      openTab: "Open in new tab",
      contentLanguage: "Language",
      fileLabel: "File",
      footerText: "Internal cybersecurity tips library · Copreci S. Coop.",
      languageNames: {
        ES: "Español",
        EN: "English",
        EU: "Euskera"
      }
    },
    eu: {
      documentTitle: "Hasiera · Zibersegurtasun aholkuak",
      metaDescription: "Copreciren zibersegurtasun-aholkuen barne-liburutegia.",
      brandSubtitle: "Zibersegurtasunaren kontzientziazioa",
      headerLabel: "AHOLKUEN BIBLIOTEKA",
      navTitle: "Edukien aurkibidea",
      searchPlaceholder: "Bilatu aholkua, kodea edo gaia...",
      introTitle: "Zibersegurtasun aholkuak",
      introText: "Hautatu atal bat alboko nabigazioan eta aukeratu hizkuntza. Edukia hemen irekiko da karpeta honetako HTML fitxategiak erabiliz.",
      noSelectionTitle: "Hautatu edukia",
      noSelectionText: "Atalak gaiaren, azpigaiaren eta hizkuntzaren arabera zabaltzen dira.",
      viewerNoSelection: "Ez da aholkurik hautatu",
      viewerNoSelectionMeta: "Aukeratu hizkuntza bat aurkibidetik edo txartel batetik.",
      openTab: "Ireki fitxa berrian",
      contentLanguage: "Hizkuntza",
      fileLabel: "Fitxategia",
      footerText: "Zibersegurtasun aholkuen barne-liburutegia · Copreci S. Coop.",
      languageNames: {
        ES: "Español",
        EN: "English",
        EU: "Euskera"
      }
    }
  },

  topics: [
    {
      code: "02",
      title: {
        es: "La evolución de las ciberamenazas",
        en: "The evolution of cyber threats",
        eu: "Zibermehatxuen bilakaera"
      },
      subtitle: {
        es: "De las bromas al cibercrimen",
        en: "From pranks to cybercrime",
        eu: "Txantxetatik ziberkrimenera"
      },
      files: {
        ES: "tips/02_ES.html",
        EN: "tips/02_EN.html",
        EU: "tips/02_EU.html"
      }
    },
    {
      code: "03",
      title: {
        es: "El auge del cibercrimen organizado",
        en: "The rise of organised cybercrime",
        eu: "Antolatutako ziberkrimenaren gorakada"
      },
      subtitle: {
        es: "Por qué la ciberseguridad es hoy más crítica que nunca",
        en: "Why cybersecurity is more critical than ever",
        eu: "Zergatik den zibersegurtasuna inoiz baino kritikoagoa"
      },
      files: {
        ES: "tips/03_ES.html",
        EN: "tips/03_EN.html",
        EU: "tips/03_EU.html"
      }
    },
    {
      code: "04",
      title: {
        es: "La ciberseguridad como responsabilidad compartida",
        en: "Cybersecurity as a shared responsibility",
        eu: "Zibersegurtasuna erantzukizun partekatu gisa"
      },
      subtitle: {
        es: "Medidas de control y factor humano",
        en: "Control measures and the human factor",
        eu: "Kontrol-neurriak eta giza faktorea"
      },
      files: {
        ES: "tips/04_ES.html",
        EN: "tips/04_EN.html",
        EU: "tips/04_EU.html"
      }
    },
    {
      code: "05",
      title: {
        es: "Casos, impacto y entorno tecnológico",
        en: "Cases, impact and technological environment",
        eu: "Kasuak, eragina eta ingurune teknologikoa"
      },
      subtitle: {
        es: "Ataques reales y evolución del riesgo",
        en: "Real attacks and risk evolution",
        eu: "Benetako erasoak eta arriskuaren bilakaera"
      },
      children: [
        {
          code: "05.00",
          title: {
            es: "Stuxnet y sistemas aislados",
            en: "Stuxnet and isolated systems",
            eu: "Stuxnet eta sistema isolatuak"
          },
          files: {
            ES: "tips/05.00_ES.html",
            EN: "tips/05.00_EN.html",
            EU: "tips/05.00_EU.html"
          }
        },
        {
          code: "05.01",
          title: {
            es: "WannaCry, Norsk Hydro y ransomware",
            en: "WannaCry, Norsk Hydro and ransomware",
            eu: "WannaCry, Norsk Hydro eta ransomwarea"
          },
          files: {
            ES: "tips/05.01_ES.html",
            EN: "tips/05.01_EN.html",
            EU: "tips/05.01_EU.html"
          }
        },
        {
          code: "05.02",
          title: {
            es: "Ataques masivos en el entorno local",
            en: "Mass attacks in the local environment",
            eu: "Eraso masiboak tokiko ingurunean"
          },
          files: {
            ES: "tips/05.02_ES.html",
            EN: "tips/05.02_EN.html",
            EU: "tips/05.02_EU.html"
          }
        },
        {
          code: "05.03",
          title: {
            es: "IoT y objetos conectados",
            en: "IoT and connected devices",
            eu: "IoTa eta objektu konektatuak"
          },
          files: {
            ES: "tips/05.03_ES.html",
            EN: "tips/05.03_EN.html",
            EU: "tips/05.03_EU.html"
          }
        }
      ]
    },
    {
      code: "06",
      title: {
        es: "El coste real de un incidente",
        en: "The real cost of an incident",
        eu: "Intzidente baten benetako kostua"
      },
      subtitle: {
        es: "Impacto económico y operativo",
        en: "Economic and operational impact",
        eu: "Eragin ekonomikoa eta operatiboa"
      },
      files: {
        ES: "tips/06_ES.html",
        EN: "tips/06_EN.html",
        EU: "tips/06_EU.html"
      }
    },
    {
      code: "07",
      title: {
        es: "Fraudes, suplantación y engaño",
        en: "Fraud, impersonation and deception",
        eu: "Iruzurrak, suplantazioa eta engainua"
      },
      subtitle: {
        es: "Técnicas actuales de ingeniería social",
        en: "Current social engineering techniques",
        eu: "Gaur egungo ingeniaritza sozialeko teknikak"
      },
      children: [
        {
          code: "07.00",
          title: {
            es: "BEC y fraude de facturas",
            en: "BEC and invoice fraud",
            eu: "BEC eta fakturen iruzurra"
          },
          files: {
            ES: "tips/07.00_ES.html",
            EN: "tips/07.00_EN.html",
            EU: "tips/07.00_EU.html"
          }
        },
        {
          code: "07.01",
          title: {
            es: "Fraude del CEO",
            en: "CEO fraud",
            eu: "CEOaren iruzurra"
          },
          files: {
            ES: "tips/07.01_ES.html",
            EN: "tips/07.01_EN.html",
            EU: "tips/07.01_EU.html"
          }
        },
        {
          code: "07.02",
          title: {
            es: "Fraude de nóminas e IA",
            en: "Payroll fraud and AI",
            eu: "Nominaren iruzurra eta IA"
          },
          files: {
            ES: "tips/07.02_ES.html",
            EN: "tips/07.02_EN.html",
            EU: "tips/07.02_EU.html"
          }
        },
        {
          code: "07.03",
          title: {
            es: "Phishing y smishing",
            en: "Phishing and smishing",
            eu: "Phishinga eta smishinga"
          },
          files: {
            ES: "tips/07.03_ES.html",
            EN: "tips/07.03_EN.html",
            EU: "tips/07.03_EU.html"
          }
        },
        {
          code: "07.04",
          title: {
            es: "Anatomía del ransomware",
            en: "Anatomy of ransomware",
            eu: "Ransomwarearen anatomia"
          },
          files: {
            ES: "tips/07.04_ES.html",
            EN: "tips/07.04_EN.html",
            EU: "tips/07.04_EU.html"
          }
        },
        {
          code: "07.05",
          title: {
            es: "Extorsión y suplantación familiar",
            en: "Extortion and family impersonation",
            eu: "Estortsioa eta senideen suplantazioa"
          },
          files: {
            ES: "tips/07.05_ES.html",
            EN: "tips/07.05_EN.html",
            EU: "tips/07.05_EU.html"
          }
        }
      ]
    },
    {
      code: "08",
      title: {
        es: "Fraudes de extorsión y suplantación familiar",
        en: "Extortion fraud and family impersonation",
        eu: "Estortsio-iruzurrak eta senideen suplantazioa"
      },
      subtitle: {
        es: "No todo lo que dicen saber es verdad",
        en: "Not everything they claim to know is true",
        eu: "Dioten guztia ez da egia"
      },
      files: {
        ES: "tips/08_ES.html",
        EN: "tips/08_EN.html",
        EU: "tips/08_EU.html"
      }
    },
    {
      code: "09",
      title: {
        es: "Los riesgos de la IA y la privacidad de datos",
        en: "AI risks and data privacy",
        eu: "IAren arriskuak eta datuen pribatutasuna"
      },
      subtitle: {
        es: "No toda herramienta es adecuada para información corporativa",
        en: "Not every tool is suitable for corporate information",
        eu: "Tresna guztiak ez dira egokiak informazio korporatiborako"
      },
      files: {
        ES: "tips/09_ES.html",
        EN: "tips/09_EN.html",
        EU: "tips/09_EU.html"
      }
    },
    {
      code: "10",
      title: {
        es: "Buenas prácticas en el puesto de trabajo",
        en: "Good workplace practices",
        eu: "Lanpostuko jardunbide egokiak"
      },
      subtitle: {
        es: "Hábitos básicos para proteger equipos e información",
        en: "Basic habits to protect devices and information",
        eu: "Gailuak eta informazioa babesteko oinarrizko ohiturak"
      },
      children: [
        {
          code: "10.00",
          title: {
            es: "Introducción a las buenas prácticas en el puesto de trabajo",
            en: "Introduction to good workplace practices",
            eu: "Lanpostuko jardunbide egokien sarrera"
          },
          subtitle: {
            es: "La importancia de lo básico en ciberseguridad",
            en: "The importance of the basics in cybersecurity",
            eu: "Oinarrizko neurrien garrantzia zibersegurtasunean"
          },
          files: {
            ES: "tips/10.00_ES.html",
            EN: "tips/10.00_EN.html",
            EU: "tips/10.00_EU.html"
          }
        },
        {
          code: "10.01",
          title: {
            es: "La seguridad de las contraseñas y el control de acceso",
            en: "Password security and access control",
            eu: "Pasahitzen segurtasuna eta sarbide-kontrola"
          },
          subtitle: {
            es: "Cómo proteger nuestra identidad digital",
            en: "How to protect our digital identity",
            eu: "Nola babestu gure identitate digitala"
          },
          files: {
            ES: "tips/10.01_ES.html",
            EN: "tips/10.01_EN.html",
            EU: "tips/10.01_EU.html"
          }
        },
        {
          code: "10.02",
          title: {
            es: "La realidad de los intentos de acceso constantes",
            en: "The reality of constant access attempts",
            eu: "Etengabeko sarbide-saiakeren errealitatea"
          },
          subtitle: {
            es: "Por qué el doble factor es una barrera esencial",
            en: "Why multi-factor authentication is an essential barrier",
            eu: "Zergatik den faktore anitzeko autentifikazioa funtsezko hesia"
          },
          files: {
            ES: "tips/10.02_ES.html",
            EN: "tips/10.02_EN.html",
            EU: "tips/10.02_EU.html"
          }
        },
        {
          code: "10.03",
          title: {
            es: "El antivirus como primera línea de defensa",
            en: "Antivirus as the first line of defence",
            eu: "Antibirusa lehen defentsa-lerro gisa"
          },
          subtitle: {
            es: "El escudo que debe estar siempre activo",
            en: "The shield that must always remain active",
            eu: "Beti aktibo egon behar duen babes-ezkutua"
          },
          files: {
            ES: "tips/10.03_ES.html",
            EN: "tips/10.03_EN.html",
            EU: "tips/10.03_EU.html"
          }
        },
        {
          code: "10.04",
          title: {
            es: "Las actualizaciones como escudos contra vulnerabilidades",
            en: "Updates as shields against vulnerabilities",
            eu: "Eguneraketak zaurgarritasunen aurkako babes gisa"
          },
          subtitle: {
            es: "Por qué reiniciar también forma parte de la seguridad",
            en: "Why restarting is also part of security",
            eu: "Zergatik den berrabiaraztea ere segurtasunaren parte"
          },
          files: {
            ES: "tips/10.04_ES.html",
            EN: "tips/10.04_EN.html",
            EU: "tips/10.04_EU.html"
          }
        },
        {
          code: "10.10",
          title: {
            es: "Los peligros ocultos del software gratuito o pirata",
            en: "The hidden dangers of free or pirated software",
            eu: "Doako edo pirata softwarearen arrisku ezkutuak"
          },
          subtitle: {
            es: "Si no es oficial, no lo instales",
            en: "If it is not official, do not install it",
            eu: "Ofiziala ez bada, ez instalatu"
          },
          files: {
            ES: "tips/10.10_ES.html",
            EN: "tips/10.10_EN.html",
            EU: "tips/10.10_EU.html"
          }
        }
      ]
    }
  ]
};
