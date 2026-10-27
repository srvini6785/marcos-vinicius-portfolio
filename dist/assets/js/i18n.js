(() => {
  const supported = ['pt-BR', 'en', 'es', 'fr', 'de'];
  const rows = [
    ['Pular para o conteúdo', 'Skip to content', 'Saltar al contenido', 'Aller au contenu', 'Zum Inhalt springen'],
    ['Menu', 'Menu', 'Menú', 'Menu', 'Menü'],
    ['Início', 'Home', 'Inicio', 'Accueil', 'Start'],
    ['Projetos', 'Projects', 'Proyectos', 'Projets', 'Projekte'],
    ['Sistemas', 'Systems', 'Sistemas', 'Systèmes', 'Systeme'],
    ['Contato', 'Contact', 'Contacto', 'Contact', 'Kontakt'],
    ['Idioma', 'Language', 'Idioma', 'Langue', 'Sprache'],
    ['Tema claro', 'Light theme', 'Tema claro', 'Thème clair', 'Helles Design'],
    ['PORTFÓLIO / DESENVOLVIMENTO', 'PORTFOLIO / DEVELOPMENT', 'PORTAFOLIO / DESARROLLO', 'PORTFOLIO / DÉVELOPPEMENT', 'PORTFOLIO / ENTWICKLUNG'],
    ['01 — PERFIL', '01 — PROFILE', '01 — PERFIL', '01 — PROFIL', '01 — PROFIL'],
    ['Desenvolvedor', 'Developer', 'Desarrollador', 'Développeur', 'Entwickler'],
    ['Software', 'Software', 'Software', 'Logiciel', 'Software'],
    ['Automação', 'Automation', 'Automatización', 'Automatisation', 'Automatisierung'],
    ['FOCO PROFISSIONAL', 'PROFESSIONAL FOCUS', 'ENFOQUE PROFESIONAL', 'AXE PROFESSIONNEL', 'BERUFLICHER FOKUS'],
    ['Desenvolvimento web, software para desktop e integrações, conectando interface, regras de negócio e serviços.', 'Web development, desktop software, and integrations connecting interfaces, business rules, and services.', 'Desarrollo web, software de escritorio e integraciones que conectan interfaces, reglas de negocio y servicios.', 'Développement web, logiciels de bureau et intégrations reliant interfaces, règles métier et services.', 'Webentwicklung, Desktop-Software und Integrationen, die Oberflächen, Geschäftsregeln und Dienste verbinden.'],
    ['Explorar projetos', 'Explore projects', 'Ver proyectos', 'Voir les projets', 'Projekte ansehen'],
    ['DIREÇÃO', 'DIRECTION', 'ENFOQUE', 'ORIENTATION', 'AUSRICHTUNG'],
    ['PROJETO EM DESTAQUE', 'FEATURED PROJECT', 'PROYECTO DESTACADO', 'PROJET À LA UNE', 'PROJEKT IM FOKUS'],
    ['SVR / EM DESENVOLVIMENTO', 'SVR / IN DEVELOPMENT', 'SVR / EN DESARROLLO', 'SVR / EN DÉVELOPPEMENT', 'SVR / IN ENTWICKLUNG'],
    ['Sou desenvolvedor autodidata em formação. Aprendo construindo projetos para web e desktop, com foco em software, regras de negócio e integrações.', 'I am a self-taught developer in training. I learn by building web and desktop projects focused on software, business rules, and integrations.', 'Soy desarrollador autodidacta en formación. Aprendo creando proyectos web y de escritorio centrados en software, reglas de negocio e integraciones.', 'Je suis développeur autodidacte en formation. J’apprends en créant des projets web et desktop axés sur les logiciels, les règles métier et les intégrations.', 'Ich bin autodidaktischer Entwickler in Ausbildung. Ich lerne durch Web- und Desktop-Projekte mit Schwerpunkt auf Software, Geschäftsregeln und Integrationen.'],
    ['Contato', 'Contact', 'Contacto', 'Contact', 'Kontakt'],
    ['02 / INICIATIVA EMPRESARIAL', '02 / BUSINESS INITIATIVE', '02 / INICIATIVA EMPRESARIAL', '02 / INITIATIVE ENTREPRENEURIALE', '02 / UNTERNEHMERISCHE INITIATIVE'],
    ['EM DESENVOLVIMENTO', 'IN DEVELOPMENT', 'EN DESARROLLO', 'EN DÉVELOPPEMENT', 'IN ENTWICKLUNG'],
    ['EMPRESA / TECNOLOGIA', 'BUSINESS / TECHNOLOGY', 'EMPRESA / TECNOLOGÍA', 'ENTREPRISE / TECHNOLOGIE', 'UNTERNEHMEN / TECHNOLOGIE'],
    ['Uma iniciativa empresarial de tecnologia em fase de fundação.', 'A technology business initiative in its foundation stage.', 'Una iniciativa empresarial tecnológica en fase de fundación.', 'Une initiative entrepreneuriale technologique en phase de fondation.', 'Eine unternehmerische Technologieinitiative in der Gründungsphase.'],
    ['O escopo, os produtos e as decisões técnicas da SVR serão apresentados conforme forem definidos. Neste momento, a empresa está em estruturação.', 'SVR’s scope, products, and technical decisions will be presented as they are defined. The company is currently being structured.', 'El alcance, los productos y las decisiones técnicas de SVR se presentarán a medida que se definan. Actualmente, la empresa está en estructuración.', 'Le périmètre, les produits et les choix techniques de SVR seront présentés au fur et à mesure de leur définition. L’entreprise est en cours de structuration.', 'Umfang, Produkte und technische Entscheidungen der SVR werden vorgestellt, sobald sie feststehen. Das Unternehmen befindet sich derzeit im Aufbau.'],
    ['ESCOPO', 'SCOPE', 'ALCANCE', 'PÉRIMÈTRE', 'UMFANG'],
    ['PRIORIDADES', 'PRIORITIES', 'PRIORIDADES', 'PRIORITÉS', 'PRIORITÄTEN'],
    ['PRÓXIMOS PASSOS', 'NEXT STEPS', 'PRÓXIMOS PASOS', 'PROCHAINES ÉTAPES', 'NÄCHSTE SCHRITTE'],
    ['Ver estágio da SVR', 'View SVR’s status', 'Ver el estado de SVR', 'Voir l’avancement de SVR', 'SVR-Status ansehen'],
    ['ESTÁGIO ATUAL', 'CURRENT STAGE', 'ETAPA ACTUAL', 'ÉTAPE ACTUELLE', 'AKTUELLER STAND'],
    ['EM FASE DE FUNDAÇÃO', 'FOUNDATION STAGE', 'EN FASE DE FUNDACIÓN', 'EN PHASE DE FONDATION', 'IN DER GRÜNDUNGSPHASE'],
    ['03 / SOBRE', '03 / ABOUT', '03 / SOBRE MÍ', '03 / À PROPOS', '03 / ÜBER MICH'],
    ['Aprender.', 'Learn.', 'Aprender.', 'Apprendre.', 'Lernen.'],
    ['Construir.', 'Build.', 'Construir.', 'Construire.', 'Bauen.'],
    ['Aprimorar.', 'Improve.', 'Mejorar.', 'Améliorer.', 'Verbessern.'],
    ['Sou desenvolvedor autodidata em formação. Aprendo construindo e aprimoro minhas soluções conforme avanço nos projetos.', 'I am a self-taught developer in training. I learn by building and improve my solutions as my projects progress.', 'Soy desarrollador autodidacta en formación. Aprendo creando y mejoro mis soluciones a medida que avanzo en mis proyectos.', 'Je suis développeur autodidacte en formation. J’apprends en construisant et j’améliore mes solutions au fil de mes projets.', 'Ich bin autodidaktischer Entwickler in Ausbildung. Ich lerne durch praktische Projekte und verbessere meine Lösungen mit jedem Schritt.'],
    ['Minha experiência reúne desenvolvimento web, um plugin para WooCommerce, uma ferramenta desktop para Android e um protótipo de campanhas para WhatsApp. O ponto em comum é conectar interface, regras de negócio e serviços.', 'My experience includes web development, a WooCommerce plugin, an Android desktop tool, and a WhatsApp campaign prototype. They share a focus on connecting interfaces, business rules, and services.', 'Mi experiencia incluye desarrollo web, un plugin para WooCommerce, una herramienta de escritorio para Android y un prototipo de campañas para WhatsApp. El hilo común es conectar interfaces, reglas de negocio y servicios.', 'Mon expérience comprend le développement web, un plugin WooCommerce, un outil desktop pour Android et un prototype de campagnes WhatsApp. Leur point commun est de relier interfaces, règles métier et services.', 'Meine Erfahrung umfasst Webentwicklung, ein WooCommerce-Plugin, ein Android-Desktop-Tool und einen WhatsApp-Kampagnenprototyp. Gemeinsam ist ihnen die Verbindung von Oberflächen, Geschäftsregeln und Diensten.'],
    ['Estou construindo minha carreira com projetos próprios e aprendizado contínuo. Meu foco Full Stack considera o fluxo completo de uma aplicação, da interface às integrações.', 'I am building my career through personal projects and continuous learning. My Full Stack focus considers an application’s complete flow, from interface to integrations.', 'Estoy construyendo mi carrera con proyectos propios y aprendizaje continuo. Mi enfoque Full Stack contempla el flujo completo de una aplicación, desde la interfaz hasta las integraciones.', 'Je construis mon parcours avec des projets personnels et un apprentissage continu. Mon approche Full Stack considère le parcours complet d’une application, de l’interface aux intégrations.', 'Ich entwickle meine Laufbahn mit eigenen Projekten und kontinuierlichem Lernen. Mein Full-Stack-Fokus betrachtet den gesamten Ablauf einer Anwendung – von der Oberfläche bis zu den Integrationen.'],
    ['Como conecto as áreas', 'How I connect the disciplines', 'Cómo conecto las áreas', 'Comment je relie les domaines', 'Wie ich die Bereiche verbinde'],
    ['04 / FOCO & EXECUÇÃO', '04 / FOCUS & DELIVERY', '04 / ENFOQUE Y EJECUCIÓN', '04 / FOCUS & RÉALISATION', '04 / FOKUS & UMSETZUNG'],
    ['Da interface', 'From interface', 'De la interfaz', 'De l’interface', 'Von der Oberfläche'],
    ['ao sistema.', 'to system.', 'al sistema.', 'au système.', 'zum System.'],
    ['Áreas de trabalho demonstradas nos projetos.', 'Areas of work demonstrated through projects.', 'Áreas de trabajo demostradas en los proyectos.', 'Domaines illustrés par les projets.', 'Arbeitsbereiche, die in Projekten sichtbar werden.'],
    ['01 / WEB', '01 / WEB', '01 / WEB', '01 / WEB', '01 / WEB'],
    ['Aplicações', 'Applications', 'Aplicaciones', 'Applications', 'Anwendungen'],
    ['Interfaces web e regras de comércio eletrônico, incluindo o plugin OCCDS para WooCommerce.', 'Web interfaces and e-commerce rules, including the OCCDS plugin for WooCommerce.', 'Interfaces web y reglas de comercio electrónico, incluido el plugin OCCDS para WooCommerce.', 'Interfaces web et règles de commerce électronique, notamment le plugin OCCDS pour WooCommerce.', 'Weboberflächen und E-Commerce-Regeln, einschließlich des OCCDS-Plugins für WooCommerce.'],
    ['02 / DESKTOP', '02 / DESKTOP', '02 / ESCRITORIO', '02 / BUREAU', '02 / DESKTOP'],
    ['Ferramentas para desktop e Android, com projetos em Python, PySide6, Java e JavaFX.', 'Desktop and Android tools, with projects using Python, PySide6, Java, and JavaFX.', 'Herramientas de escritorio y Android, con proyectos en Python, PySide6, Java y JavaFX.', 'Outils desktop et Android, avec des projets en Python, PySide6, Java et JavaFX.', 'Desktop- und Android-Tools mit Projekten in Python, PySide6, Java und JavaFX.'],
    ['03 / INTEGRAÇÕES', '03 / INTEGRATIONS', '03 / INTEGRACIONES', '03 / INTÉGRATIONS', '03 / INTEGRATIONEN'],
    ['APIs & eventos', 'APIs & events', 'APIs y eventos', 'API et événements', 'APIs und Ereignisse'],
    ['Projetos com APIs REST, webhooks e serviços externos, incluindo um protótipo para WhatsApp.', 'Projects using REST APIs, webhooks, and external services, including a WhatsApp prototype.', 'Proyectos con API REST, webhooks y servicios externos, incluido un prototipo para WhatsApp.', 'Projets utilisant des API REST, des webhooks et des services externes, dont un prototype WhatsApp.', 'Projekte mit REST-APIs, Webhooks und externen Diensten, darunter ein WhatsApp-Prototyp.'],
    ['04 / AMBIENTES', '04 / ENVIRONMENTS', '04 / ENTORNOS', '04 / ENVIRONNEMENTS', '04 / UMGEBUNGEN'],
    ['Configuração de ambientes Windows, ferramentas Android e uso pontual de WSL2.', 'Windows environment setup, Android tools, and occasional use of WSL2.', 'Configuración de entornos Windows, herramientas Android y uso puntual de WSL2.', 'Configuration d’environnements Windows, outils Android et usage ponctuel de WSL2.', 'Windows-Umgebungskonfiguration, Android-Tools und gelegentliche Nutzung von WSL2.'],
    ['05 / PROJETOS SELECIONADOS', '05 / SELECTED PROJECTS', '05 / PROYECTOS SELECCIONADOS', '05 / PROJETS SÉLECTIONNÉS', '05 / AUSGEWÄHLTE PROJEKTE'],
    ['Código aplicado', 'Code applied', 'Código aplicado', 'Du code au concret', 'Code in der Praxis'],
    ['a problemas reais.', 'to real problems.', 'a problemas reales.', 'à des problèmes réels.', 'für konkrete Probleme.'],
    ['Ver todos os cases', 'View all projects', 'Ver todos los proyectos', 'Voir tous les projets', 'Alle Projekte ansehen'],
    ['CASE / WOOCOMMERCE PLUGIN', 'CASE / WOOCOMMERCE PLUGIN', 'CASO / PLUGIN WOOCOMMERCE', 'PROJET / PLUGIN WOOCOMMERCE', 'PROJEKT / WOOCOMMERCE-PLUGIN'],
    ['PLUGIN DESENVOLVIDO', 'PLUGIN DEVELOPED', 'PLUGIN DESARROLLADO', 'PLUGIN DÉVELOPPÉ', 'PLUGIN ENTWICKELT'],
    ['Plugin desenvolvido para rifas no WooCommerce, com seleção de números integrada ao fluxo de compra. O site que o utilizava não está mais ativo.', 'A WooCommerce raffle plugin with number selection integrated into the purchase flow. The website that used it is no longer active.', 'Plugin de rifas para WooCommerce con selección de números integrada al proceso de compra. El sitio que lo utilizaba ya no está activo.', 'Plugin de tombola pour WooCommerce avec sélection de numéros intégrée au parcours d’achat. Le site qui l’utilisait n’est plus actif.', 'Ein WooCommerce-Raffle-Plugin mit Nummernauswahl im Kaufablauf. Die Website, auf der es eingesetzt wurde, ist nicht mehr aktiv.'],
    ['Plugin desenvolvido', 'Plugin developed', 'Plugin desarrollado', 'Plugin développé', 'Plugin entwickelt'],
    ['SOFTWARE DESKTOP', 'DESKTOP SOFTWARE', 'SOFTWARE DE ESCRITORIO', 'LOGICIEL DESKTOP', 'DESKTOP-SOFTWARE'],
    ['PROTÓTIPO / INTEGRAÇÕES', 'PROTOTYPE / INTEGRATIONS', 'PROTOTIPO / INTEGRACIONES', 'PROTOTYPE / INTÉGRATIONS', 'PROTOTYP / INTEGRATIONEN'],
    ['06 / COMO TRABALHO', '06 / HOW I WORK', '06 / CÓMO TRABAJO', '06 / MA MÉTHODE', '06 / MEINE ARBEITSWEISE'],
    ['Do problema', 'From problem', 'Del problema', 'Du problème', 'Vom Problem'],
    ['à solução.', 'to solution.', 'a la solución.', 'à la solution.', 'zur Lösung.'],
    ['Entender o problema', 'Understand the problem', 'Entender el problema', 'Comprendre le problème', 'Das Problem verstehen'],
    ['Identificar a tarefa, o contexto e o resultado esperado.', 'Identify the task, the context, and the expected outcome.', 'Identificar la tarea, el contexto y el resultado esperado.', 'Identifier la tâche, le contexte et le résultat attendu.', 'Aufgabe, Kontext und gewünschtes Ergebnis bestimmen.'],
    ['ESCOPO', 'SCOPE', 'ALCANCE', 'PÉRIMÈTRE', 'UMFANG'],
    ['Mapear as regras', 'Map the rules', 'Definir las reglas', 'Définir les règles', 'Regeln erfassen'],
    ['Organizar os dados e as etapas que a solução precisa atender.', 'Organize the data and steps the solution needs to support.', 'Organizar los datos y los pasos que debe cubrir la solución.', 'Organiser les données et les étapes nécessaires à la solution.', 'Daten und Schritte ordnen, die die Lösung abdecken muss.'],
    ['LÓGICA', 'LOGIC', 'LÓGICA', 'LOGIQUE', 'LOGIK'],
    ['Conectar as partes', 'Connect the pieces', 'Conectar las partes', 'Relier les éléments', 'Die Komponenten verbinden'],
    ['Integrar interface, aplicação e serviços externos quando necessário.', 'Connect the interface, application, and external services when needed.', 'Integrar la interfaz, la aplicación y servicios externos cuando sea necesario.', 'Relier l’interface, l’application et des services externes si nécessaire.', 'Oberfläche, Anwendung und externe Dienste bei Bedarf integrieren.'],
    ['INTEGRAÇÃO', 'INTEGRATION', 'INTEGRACIÓN', 'INTÉGRATION', 'INTEGRATION'],
    ['Registrar o estágio', 'Document the stage', 'Documentar la etapa', 'Documenter l’avancement', 'Den Projektstand dokumentieren'],
    ['Apresentar o que está implementado e separar do que permanece em planejamento.', 'Show what is implemented and distinguish it from what is still planned.', 'Mostrar lo implementado y distinguirlo de lo que sigue en planificación.', 'Présenter ce qui est réalisé et le distinguer de ce qui reste à planifier.', 'Umgesetztes klar von Geplantem unterscheiden.'],
    ['TRANSPARÊNCIA', 'TRANSPARENCY', 'TRANSPARENCIA', 'TRANSPARENCE', 'TRANSPARENZ'],
    ['07 / PRÓXIMA CONVERSA', '07 / NEXT CONVERSATION', '07 / PRÓXIMA CONVERSACIÓN', '07 / PROCHAINE CONVERSATION', '07 / NÄCHSTES GESPRÄCH'],
    ['Vamos falar', 'Let’s talk', 'Hablemos', 'Parlons', 'Wir sprechen'],
    ['sobre o que', 'about what', 'de qué', 'de ce qu’il faut', 'darüber, was wir'],
    ['construir.', 'to build.', 'construir.', 'construire.', 'bauen.'],
    ['Para conversar sobre projetos, use os canais listados na página de contato.', 'To discuss projects, use the channels listed on the contact page.', 'Para hablar sobre proyectos, utiliza los canales de la página de contacto.', 'Pour parler de projets, utilisez les moyens indiqués sur la page de contact.', 'Für Gespräche über Projekte nutze die auf der Kontaktseite genannten Kanäle.'],
    ['Abrir contato', 'Open contact', 'Abrir contacto', 'Voir les contacts', 'Kontakt öffnen'],
    ['WEB · SOFTWARE · AUTOMAÇÃO', 'WEB · SOFTWARE · AUTOMATION', 'WEB · SOFTWARE · AUTOMATIZACIÓN', 'WEB · LOGICIEL · AUTOMATISATION', 'WEB · SOFTWARE · AUTOMATISIERUNG'],
    ['02 / PROJETO EMPRESARIAL', '02 / BUSINESS INITIATIVE', '02 / PROYECTO EMPRESARIAL', '02 / INITIATIVE ENTREPRENEURIALE', '02 / UNTERNEHMERISCHE INITIATIVE'],
    ['Iniciativa empresarial de tecnologia em fase de fundação.', 'A technology business initiative in its foundation stage.', 'Iniciativa empresarial tecnológica en fase de fundación.', 'Initiative entrepreneuriale technologique en phase de fondation.', 'Unternehmerische Technologieinitiative in der Gründungsphase.'],
    ['ESTÁGIO ATUAL', 'CURRENT STAGE', 'ETAPA ACTUAL', 'ÉTAPE ACTUELLE', 'AKTUELLER STAND'],
    ['Fundação e', 'Foundation and', 'Fundación y', 'Fondation et', 'Gründung und'],
    ['planejamento.', 'planning.', 'planificación.', 'planification.', 'Planung.'],
    ['A SVR está sendo estruturada como uma iniciativa empresarial de tecnologia.', 'SVR is being structured as a technology business initiative.', 'SVR se está estructurando como una iniciativa empresarial tecnológica.', 'SVR se structure comme une initiative entrepreneuriale technologique.', 'SVR wird als unternehmerische Technologieinitiative aufgebaut.'],
    ['Neste estágio, o foco está em definir escopo, prioridades e próximos passos. Os produtos e as decisões técnicas ainda não serão apresentados como entregas concluídas.', 'At this stage, the focus is on defining scope, priorities, and next steps. Products and technical decisions are not presented as completed deliverables.', 'En esta etapa, el enfoque está en definir alcance, prioridades y próximos pasos. Los productos y decisiones técnicas no se presentan como entregas terminadas.', 'À ce stade, l’objectif est de définir le périmètre, les priorités et les prochaines étapes. Les produits et choix techniques ne sont pas présentés comme des livrables terminés.', 'In dieser Phase geht es um Umfang, Prioritäten und nächste Schritte. Produkte und technische Entscheidungen werden nicht als fertige Ergebnisse dargestellt.'],
    ['AGORA', 'NOW', 'AHORA', 'MAINTENANT', 'JETZT'],
    ['Fase de fundação', 'Foundation stage', 'Fase de fundación', 'Phase de fondation', 'Gründungsphase'],
    ['Estruturação da iniciativa empresarial e definição de prioridades.', 'Structuring the business initiative and setting priorities.', 'Estructuración de la iniciativa empresarial y definición de prioridades.', 'Structuration de l’initiative et définition des priorités.', 'Aufbau der Initiative und Festlegung von Prioritäten.'],
    ['EM DEFINIÇÃO', 'BEING DEFINED', 'POR DEFINIR', 'EN COURS DE DÉFINITION', 'IN DEFINITION'],
    ['Escopo dos produtos', 'Product scope', 'Alcance de los productos', 'Périmètre des produits', 'Produktumfang'],
    ['Produtos e serviços ainda não são apresentados como disponíveis.', 'Products and services are not yet presented as available.', 'Los productos y servicios todavía no se presentan como disponibles.', 'Les produits et services ne sont pas encore présentés comme disponibles.', 'Produkte und Dienstleistungen werden noch nicht als verfügbar dargestellt.'],
    ['PRÓXIMAS ATUALIZAÇÕES', 'NEXT UPDATES', 'PRÓXIMAS ACTUALIZACIONES', 'PROCHAINES MISES À JOUR', 'NÄCHSTE AKTUALISIERUNGEN'],
    ['Informações confirmadas', 'Confirmed information', 'Información confirmada', 'Informations confirmées', 'Bestätigte Informationen'],
    ['Esta página será atualizada quando houver escopo público e entregas apresentáveis.', 'This page will be updated when there is a public scope and presentable work to share.', 'Esta página se actualizará cuando haya un alcance público y entregas que presentar.', 'Cette page sera mise à jour lorsqu’un périmètre public et des réalisations pourront être présentés.', 'Diese Seite wird aktualisiert, sobald Umfang und vorzeigbare Ergebnisse feststehen.'],
    ['03 / PROJETOS', '03 / PROJECTS', '03 / PROYECTOS', '03 / PROJETS', '03 / PROJEKTE'],
    ['Problema.', 'Problem.', 'Problema.', 'Problème.', 'Problem.'],
    ['Solução.', 'Solution.', 'Solución.', 'Solution.', 'Lösung.'],
    ['Cases de software com escopo e estágio apresentados de forma direta.', 'Software projects with a clear description of scope and status.', 'Proyectos de software con alcance y estado presentados con claridad.', 'Projets logiciels dont le périmètre et l’avancement sont présentés clairement.', 'Softwareprojekte mit klar beschriebenem Umfang und Status.'],
    ['PROJETOS SELECIONADOS', 'SELECTED PROJECTS', 'PROYECTOS SELECCIONADOS', 'PROJETS SÉLECTIONNÉS', 'AUSGEWÄHLTE PROJEKTE'],
    ['Software', 'Software', 'Software', 'Logiciel', 'Software'],
    ['com contexto.', 'with context.', 'con contexto.', 'avec contexte.', 'mit Kontext.'],
    ['Todos', 'All', 'Todos', 'Tous', 'Alle'],
    ['Web & plugin', 'Web & plugins', 'Web y plugins', 'Web et plugins', 'Web & Plugins'],
    ['Desktop / Android', 'Desktop / Android', 'Escritorio / Android', 'Bureau / Android', 'Desktop / Android'],
    ['Integrações', 'Integrations', 'Integraciones', 'Intégrations', 'Integrationen'],
    ['03 / PROJETOS', '03 / PROJECTS', '03 / PROYECTOS', '03 / PROJETS', '03 / PROJEKTE'],
    ['FLUXO DO PRODUTO', 'PRODUCT FLOW', 'FLUJO DEL PRODUCTO', 'PARCOURS DU PRODUIT', 'PRODUKTABLAUF'],
    ['Selecionar números', 'Select numbers', 'Seleccionar números', 'Sélectionner des numéros', 'Nummern auswählen'],
    ['Seguir para a compra', 'Continue to checkout', 'Continuar con la compra', 'Continuer vers l’achat', 'Zum Kauf fortfahren'],
    ['O site que utilizava o plugin foi desativado. Este case apresenta o plugin desenvolvido, não um site atualmente em operação.', 'The website that used the plugin has been discontinued. This project presents the plugin itself, not a website that is currently operating.', 'El sitio que utilizaba el plugin fue desactivado. Este caso presenta el plugin, no un sitio actualmente operativo.', 'Le site qui utilisait le plugin a été désactivé. Ce projet présente le plugin, pas un site actuellement en activité.', 'Die Website, auf der das Plugin eingesetzt wurde, ist nicht mehr aktiv. Dieses Projekt stellt das Plugin vor, keine aktuell betriebene Website.'],
    ['02 / DESKTOP · ANDROID', '02 / DESKTOP · ANDROID', '02 / ESCRITORIO · ANDROID', '02 / BUREAU · ANDROID', '02 / DESKTOP · ANDROID'],
    ['Ferramenta Android', 'Android tool', 'Herramienta Android', 'Outil Android', 'Android-Tool'],
    ['Ferramenta desktop para operações com dispositivos Android via ADB. O projeto começou em Python com PySide6 e passou por uma migração para Java 17, JavaFX 21 e Maven.', 'A desktop tool for working with Android devices through ADB. The project began in Python with PySide6 and later migrated to Java 17, JavaFX 21, and Maven.', 'Herramienta de escritorio para operaciones con dispositivos Android mediante ADB. El proyecto comenzó en Python con PySide6 y luego migró a Java 17, JavaFX 21 y Maven.', 'Outil desktop pour les opérations sur des appareils Android via ADB. Le projet a commencé en Python avec PySide6, puis a migré vers Java 17, JavaFX 21 et Maven.', 'Desktop-Tool für die Arbeit mit Android-Geräten über ADB. Das Projekt begann mit Python und PySide6 und wurde später auf Java 17, JavaFX 21 und Maven migriert.'],
    ['03 / APIs · INTEGRAÇÕES', '03 / APIs · INTEGRATIONS', '03 / API · INTEGRACIONES', '03 / API · INTÉGRATIONS', '03 / APIS · INTEGRATIONEN'],
    ['Campanhas para WhatsApp', 'WhatsApp campaign platform', 'Campañas para WhatsApp', 'Campagnes WhatsApp', 'WhatsApp-Kampagnen'],
    ['Protótipo de uma plataforma para organizar campanhas, com painel em HTML, CSS e JavaScript e backend em Node.js/Express. O escopo documentado inclui contatos, templates, campanhas, envio em lotes e webhooks para eventos. A integração real com a API do WhatsApp Business Cloud não tem resultados de produção publicados.', 'A prototype platform for organizing WhatsApp campaigns, with an HTML, CSS, and JavaScript dashboard and a Node.js/Express backend. The documented scope includes contacts, templates, campaigns, batch sending, and event webhooks. No production results for a live WhatsApp Business Cloud API integration are published.', 'Prototipo de plataforma para organizar campañas de WhatsApp, con panel en HTML, CSS y JavaScript y backend en Node.js/Express. El alcance documentado incluye contactos, plantillas, campañas, envíos por lotes y webhooks de eventos. No se publican resultados de producción de una integración real con WhatsApp Business Cloud API.', 'Prototype de plateforme pour organiser des campagnes WhatsApp, avec tableau de bord en HTML, CSS et JavaScript et backend Node.js/Express. Le périmètre documenté comprend les contacts, modèles, campagnes, envois par lots et webhooks d’événements. Aucun résultat de production d’une intégration réelle à WhatsApp Business Cloud API n’est publié.', 'Prototyp einer Plattform zur Organisation von WhatsApp-Kampagnen mit Dashboard in HTML, CSS und JavaScript sowie Node.js/Express-Backend. Der dokumentierte Umfang umfasst Kontakte, Vorlagen, Kampagnen, Stapelversand und Event-Webhooks. Es werden keine Produktionsergebnisse einer echten WhatsApp-Business-Cloud-API-Integration veröffentlicht.'],
    ['PERFIL PROFISSIONAL', 'PROFESSIONAL PROFILE', 'PERFIL PROFESIONAL', 'PROFIL PROFESSIONNEL', 'PROFIL'],
    ['Acesse meu perfil no GitHub.', 'Visit my GitHub profile.', 'Visita mi perfil de GitHub.', 'Visitez mon profil GitHub.', 'Besuche mein GitHub-Profil.'],
    ['03 / TECNOLOGIAS', '03 / TECHNOLOGIES', '03 / TECNOLOGÍAS', '03 / TECHNOLOGIES', '03 / TECHNOLOGIEN'],
    ['Tecnologias', 'Technologies', 'Tecnologías', 'Technologies', 'Technologien'],
    ['com contexto.', 'with context.', 'con contexto.', 'avec contexte.', 'mit Kontext.'],
    ['Uma visão geral das linguagens e ferramentas presentes nos projetos, sem separar tecnologia do problema que ela ajuda a resolver.', 'An overview of the languages and tools used in the projects, connected to the problems they help solve.', 'Una visión general de los lenguajes y herramientas presentes en los proyectos, relacionados con los problemas que ayudan a resolver.', 'Un aperçu des langages et outils utilisés dans les projets, reliés aux problèmes qu’ils contribuent à résoudre.', 'Ein Überblick über Sprachen und Werkzeuge in den Projekten und die Probleme, die sie lösen.'],
    ['A / WEB & E-COMMERCE', 'A / WEB & E-COMMERCE', 'A / WEB Y COMERCIO ELECTRÓNICO', 'A / WEB & E-COMMERCE', 'A / WEB & E-COMMERCE'],
    ['Desenvolvimento web e regras de produto, com experiência em WordPress, WooCommerce, PHP, HTML, CSS e JavaScript.', 'Web development and product rules, with experience in WordPress, WooCommerce, PHP, HTML, CSS, and JavaScript.', 'Desarrollo web y reglas de producto, con experiencia en WordPress, WooCommerce, PHP, HTML, CSS y JavaScript.', 'Développement web et règles produit, avec une expérience de WordPress, WooCommerce, PHP, HTML, CSS et JavaScript.', 'Webentwicklung und Produktregeln mit Erfahrung in WordPress, WooCommerce, PHP, HTML, CSS und JavaScript.'],
    ['B / SOFTWARE DESKTOP', 'B / DESKTOP SOFTWARE', 'B / SOFTWARE DE ESCRITORIO', 'B / LOGICIEL DESKTOP', 'B / DESKTOP-SOFTWARE'],
    ['Ferramentas', 'Tools', 'Herramientas', 'Outils', 'Werkzeuge'],
    ['Ferramenta desktop para operações com dispositivos Android via ADB, com versões em Python/PySide6 e Java/JavaFX.', 'A desktop tool for Android device operations through ADB, with versions in Python/PySide6 and Java/JavaFX.', 'Herramienta de escritorio para operaciones con dispositivos Android mediante ADB, con versiones en Python/PySide6 y Java/JavaFX.', 'Outil desktop pour les opérations sur appareils Android via ADB, avec des versions en Python/PySide6 et Java/JavaFX.', 'Desktop-Tool für Android-Geräte über ADB, mit Versionen in Python/PySide6 und Java/JavaFX.'],
    ['C / APIs & INTEGRAÇÕES', 'C / APIs & INTEGRATIONS', 'C / API E INTEGRACIONES', 'C / API & INTÉGRATIONS', 'C / APIS & INTEGRATIONEN'],
    ['Conexões', 'Connections', 'Conexiones', 'Connexions', 'Verbindungen'],
    ['Experiência prática com APIs REST, JSON e webhooks, incluindo um protótipo de plataforma para campanhas via WhatsApp Business Cloud API.', 'Hands-on experience with REST APIs, JSON, and webhooks, including a prototype platform for WhatsApp Business Cloud API campaigns.', 'Experiencia práctica con API REST, JSON y webhooks, incluido un prototipo de plataforma para campañas con WhatsApp Business Cloud API.', 'Expérience pratique des API REST, JSON et webhooks, dont un prototype de plateforme de campagnes via WhatsApp Business Cloud API.', 'Praktische Erfahrung mit REST-APIs, JSON und Webhooks, einschließlich eines Prototyps für WhatsApp-Business-Cloud-API-Kampagnen.'],
    ['D / SISTEMAS E AMBIENTES', 'D / SYSTEMS & ENVIRONMENTS', 'D / SISTEMAS Y ENTORNOS', 'D / SYSTÈMES & ENVIRONNEMENTS', 'D / SYSTEME & UMGEBUNGEN'],
    ['Configuração', 'Configuration', 'Configuración', 'Configuration', 'Konfiguration'],
    ['Experiência prática com variáveis de ambiente e PATH no Windows, ferramentas ADB/Fastboot e uso pontual de WSL2.', 'Hands-on experience with Windows PATH and environment variables, ADB/Fastboot tools, and occasional WSL2 use.', 'Experiencia práctica con PATH y variables de entorno en Windows, herramientas ADB/Fastboot y uso puntual de WSL2.', 'Expérience pratique de PATH et des variables d’environnement sous Windows, des outils ADB/Fastboot et d’un usage ponctuel de WSL2.', 'Praktische Erfahrung mit Windows-PATH und Umgebungsvariablen, ADB/Fastboot-Tools und gelegentlicher WSL2-Nutzung.'],
    ['LINGUAGENS DE PROGRAMAÇÃO', 'PROGRAMMING LANGUAGES', 'LENGUAJES DE PROGRAMACIÓN', 'LANGAGES DE PROGRAMMATION', 'PROGRAMMIERSPRACHEN'],
    ['Linguagens', 'Languages', 'Lenguajes', 'Langages', 'Sprachen'],
    ['que domino.', 'I work with.', 'que domino.', 'que je maîtrise.', 'die ich beherrsche.'],
    ['Uma visão rápida das linguagens com que trabalho.', 'A quick overview of the languages I work with.', 'Un resumen de los lenguajes con los que trabajo.', 'Un aperçu des langages que j’utilise.', 'Ein Überblick über die Sprachen, mit denen ich arbeite.'],
    ['TECNOLOGIAS NOS PROJETOS', 'TECHNOLOGIES IN PROJECTS', 'TECNOLOGÍAS EN LOS PROYECTOS', 'TECHNOLOGIES DES PROJETS', 'TECHNOLOGIEN IN PROJEKTEN'],
    ['Ferramentas', 'Tools', 'Herramientas', 'Outils', 'Werkzeuge'],
    ['de trabalho.', 'I use.', 'que utilizo.', 'utilisés.', 'im Einsatz.'],
    ['Organizadas por projeto e contexto de uso.', 'Organized by project and use case.', 'Organizadas por proyecto y contexto de uso.', 'Organisées par projet et contexte d’utilisation.', 'Nach Projekt und Einsatzzweck geordnet.'],
    ['FRONT-END', 'FRONT END', 'FRONT-END', 'FRONT-END', 'FRONTEND'],
    ['BACK-END', 'BACK END', 'BACK-END', 'BACK-END', 'BACKEND'],
    ['WEB & E-COMMERCE', 'WEB & E-COMMERCE', 'WEB Y COMERCIO ELECTRÓNICO', 'WEB & E-COMMERCE', 'WEB & E-COMMERCE'],
    ['DESKTOP & ANDROID', 'DESKTOP & ANDROID', 'ESCRITORIO Y ANDROID', 'DESKTOP & ANDROID', 'DESKTOP & ANDROID'],
    ['APIs & INTEGRAÇÕES', 'APIs & INTEGRATIONS', 'APIs e integraciones', 'API & INTÉGRATIONS', 'APIs & INTEGRATIONEN'],
    ['SISTEMAS', 'SYSTEMS', 'SISTEMAS', 'SYSTÈMES', 'SYSTEME'],
    ['EXPERIÊNCIA COMPLEMENTAR', 'ADDITIONAL EXPERIENCE', 'EXPERIENCIA COMPLEMENTARIA', 'EXPÉRIENCE COMPLÉMENTAIRE', 'ERGÄNZENDE ERFAHRUNG'],
    ['Comunidades', 'Communities', 'Comunidades', 'Communautés', 'Communitys'],
    ['Discord.', 'Discord.', 'Discord.', 'Discord.', 'Discord.'],
    ['Atuação histórica como staff em comunidades do Discord. Essa experiência complementa minha trajetória em software; as comunidades citadas já não estão ativas.', 'Historical experience as staff in Discord communities. This complements my software background; the communities mentioned are no longer active.', 'Experiencia histórica como staff en comunidades de Discord. Complementa mi trayectoria en software; las comunidades mencionadas ya no están activas.', 'Expérience passée comme membre du staff de communautés Discord. Elle complète mon parcours logiciel ; les communautés citées ne sont plus actives.', 'Frühere Tätigkeit als Staff in Discord-Communitys. Diese Erfahrung ergänzt meinen Software-Werdegang; die genannten Communitys sind nicht mehr aktiv.'],
    ['Moderação', 'Moderation', 'Moderación', 'Modération', 'Moderation'],
    ['Comunidades online', 'Online communities', 'Comunidades en línea', 'Communautés en ligne', 'Online-Communitys'],
    ['Experiência histórica', 'Historical experience', 'Experiencia histórica', 'Expérience passée', 'Frühere Erfahrung'],
    ['30+ COMUNIDADES · EXPERIÊNCIA HISTÓRICA', '30+ COMMUNITIES · HISTORICAL EXPERIENCE', '30+ COMUNIDADES · EXPERIENCIA HISTÓRICA', '30+ COMMUNAUTÉS · EXPÉRIENCE PASSÉE', '30+ COMMUNITYS · FRÜHERE ERFAHRUNG'],
    ['Atuei como staff em mais de 30 comunidades do Discord ao longo do tempo. Esses espaços já não estão ativos; não são apresentados como atuação atual.', 'I served as staff in more than 30 Discord communities over time. Those communities are no longer active and are not presented as current work.', 'Fui staff en más de 30 comunidades de Discord a lo largo del tiempo. Esas comunidades ya no están activas y no se presentan como una actividad actual.', 'J’ai fait partie du staff de plus de 30 communautés Discord au fil du temps. Elles ne sont plus actives et ne sont pas présentées comme une activité actuelle.', 'Im Laufe der Zeit war ich Staff-Mitglied in mehr als 30 Discord-Communitys. Diese sind nicht mehr aktiv und werden nicht als aktuelle Tätigkeit dargestellt.'],
    ['~15 milhões', '~15 million', '~15 millones', '~15 millions', '~15 Millionen'],
    ['de membros somados entre as comunidades — estimativa agregada, não usuários únicos nem alcance atual.', 'combined member counts across those communities — an aggregate estimate, not unique users or current reach.', 'de miembros sumados entre las comunidades: una estimación agregada, no usuarios únicos ni alcance actual.', 'de membres cumulés dans ces communautés — une estimation agrégée, pas des utilisateurs uniques ni une portée actuelle.', 'addierte Mitgliederzahlen dieser Communitys – eine Gesamtschätzung, keine eindeutigen Personen oder aktuelle Reichweite.'],
    ['PRESENÇA NO PORTFÓLIO', 'PRESENCE ON THIS PORTFOLIO', 'PRESENCIA EN EL PORTAFOLIO', 'PRÉSENCE SUR LE PORTFOLIO', 'PRÄSENZ IM PORTFOLIO'],
    ['O cartão na página de contato exibe a presença do Discord quando a integração está conectada. O estado depende dos dados disponibilizados pelo Discord.', 'The contact page card displays Discord presence when the integration is connected. The status depends on the data Discord makes available.', 'La tarjeta de contacto muestra la presencia de Discord cuando la integración está conectada. El estado depende de los datos disponibles en Discord.', 'La carte de contact affiche la présence Discord lorsque l’intégration est connectée. Le statut dépend des données disponibles auprès de Discord.', 'Die Kontaktkarte zeigt den Discord-Status, wenn die Integration verbunden ist. Die Anzeige hängt von den von Discord bereitgestellten Daten ab.'],
    ['Ver perfil e contato', 'View profile and contact', 'Ver perfil y contacto', 'Voir le profil et contacter', 'Profil und Kontakt ansehen'],
    ['05 / CONTATO', '05 / CONTACT', '05 / CONTACTO', '05 / CONTACT', '05 / KONTAKT'],
    ['Vamos falar', 'Let’s talk', 'Hablemos', 'Parlons', 'Lass uns sprechen'],
    ['de', 'about', 'de', 'de', 'über'],
    ['software.', 'software.', 'software.', 'logiciel.', 'Software.'],
    ['Entre em contato pelo GitHub ou pelo Discord.', 'Get in touch on GitHub or Discord.', 'Ponte en contacto por GitHub o Discord.', 'Contactez-moi sur GitHub ou Discord.', 'Kontaktiere mich über GitHub oder Discord.'],
    ['GITHUB', 'GITHUB', 'GITHUB', 'GITHUB', 'GITHUB'],
    ['DISCORD', 'DISCORD', 'DISCORD', 'DISCORD', 'DISCORD'],
    ['DISCORD / PERFIL', 'DISCORD / PROFILE', 'DISCORD / PERFIL', 'DISCORD / PROFIL', 'DISCORD / PROFIL'],
    ['INTEGRAÇÃO DO DISCORD', 'DISCORD INTEGRATION', 'INTEGRACIÓN DE DISCORD', 'INTÉGRATION DISCORD', 'DISCORD-INTEGRATION'],
    ['Perfil e', 'Profile and', 'Perfil y', 'Profil et', 'Profil und'],
    ['presença.', 'presence.', 'presencia.', 'présence.', 'Präsenz.'],
    ['Perfil público', 'Public profile', 'Perfil público', 'Profil public', 'Öffentliches Profil'],
    ['. O cartão mostra o status recebido do Discord enquanto a integração do portfólio estiver conectada; a página atualiza a cada 30 segundos.', '. The card shows the status received from Discord while the portfolio integration is connected; the page refreshes every 30 seconds.', '. La tarjeta muestra el estado recibido de Discord mientras la integración del portafolio está conectada; la página se actualiza cada 30 segundos.', '. La carte affiche le statut reçu de Discord lorsque l’intégration du portfolio est connectée ; la page se met à jour toutes les 30 secondes.', '. Die Karte zeigt den von Discord empfangenen Status, solange die Portfolio-Integration verbunden ist; die Seite wird alle 30 Sekunden aktualisiert.'],
    ['Perfil: @nlyny', 'Profile: @nlyny', 'Perfil: @nlyny', 'Profil : @nlyny', 'Profil: @nlyny'],
    ['Atualização da página: 30 s', 'Page refresh: 30 sec', 'Actualización de página: 30 s', 'Mise à jour : 30 s', 'Aktualisierung: 30 Sek.'],
    ['STATUS INDISPONÍVEL', 'STATUS UNAVAILABLE', 'ESTADO NO DISPONIBLE', 'STATUT INDISPONIBLE', 'STATUS NICHT VERFÜGBAR'],
    ['Perfil do Discord', 'Discord profile', 'Perfil de Discord', 'Profil Discord', 'Discord-Profil'],
    ['Aguardando dados de presença do Discord.', 'Waiting for Discord presence data.', 'Esperando los datos de presencia de Discord.', 'En attente des données de présence Discord.', 'Warte auf Discord-Präsenzdaten.'],
    ['Abrir perfil', 'Open profile', 'Abrir perfil', 'Ouvrir le profil', 'Profil öffnen'],
    ['Copiar @nlyny', 'Copy @nlyny', 'Copiar @nlyny', 'Copier @nlyny', '@nlyny kopieren'],
    ['INTEGRAÇÃO DO PERFIL', 'PROFILE INTEGRATION', 'INTEGRACIÓN DEL PERFIL', 'INTÉGRATION DU PROFIL', 'PROFIL-INTEGRATION'],
    ['Discord Gateway', 'Discord Gateway', 'Discord Gateway', 'Discord Gateway', 'Discord Gateway'],
    ['Serviço Node', 'Node service', 'Servicio Node', 'Service Node', 'Node-Dienst'],
    ['API do portfólio', 'Portfolio API', 'API del portafolio', 'API du portfolio', 'Portfolio-API'],
    ['Card', 'Card', 'Tarjeta', 'Carte', 'Karte'],
    ['O backend recebe os eventos de presença disponíveis no servidor do Discord e entrega um resumo para este cartão. A página atualiza os dados a cada 30 segundos e identifica quando a conexão não está ativa.', 'The backend receives the presence events available in the Discord server and provides a summary for this card. The page refreshes every 30 seconds and indicates when the connection is inactive.', 'El backend recibe los eventos de presencia disponibles en el servidor de Discord y proporciona un resumen para esta tarjeta. La página actualiza los datos cada 30 segundos e indica si la conexión está inactiva.', 'Le backend reçoit les événements de présence disponibles sur le serveur Discord et fournit un résumé à cette carte. La page actualise les données toutes les 30 secondes et signale une connexion inactive.', 'Das Backend empfängt verfügbare Präsenzereignisse vom Discord-Server und liefert eine Zusammenfassung für diese Karte. Die Seite aktualisiert die Daten alle 30 Sekunden und zeigt an, wenn die Verbindung inaktiv ist.'],
    ['Marcos Vinicius', 'Marcos Vinicius', 'Marcos Vinicius', 'Marcos Vinicius', 'Marcos Vinicius'],
    ['VOLTAR AO TOPO ↑', 'BACK TO TOP ↑', 'VOLVER ARRIBA ↑', 'RETOUR EN HAUT ↑', 'NACH OBEN ↑'],
    ['Início', 'Home', 'Inicio', 'Accueil', 'Start'],
    ['Acrescentar ao WooCommerce um fluxo de rifa com seleção de números ligada à compra do produto.', 'Add a raffle flow with number selection linked to the WooCommerce product purchase.', 'Añadir a WooCommerce un flujo de rifas con selección de números vinculada a la compra del producto.', 'Ajouter à WooCommerce un parcours de tombola avec sélection de numéros liée à l’achat du produit.', 'WooCommerce um einen Raffle-Ablauf mit Nummernauswahl ergänzen, der mit dem Produktkauf verbunden ist.'],
    ['DESENVOLVIDO', 'DEVELOPED', 'DESARROLLADO', 'DÉVELOPPÉ', 'ENTWICKELT'],
    ['Ferramenta desktop para operações com dispositivos Android via ADB, com versões em Python/PySide6 e Java/JavaFX.', 'A desktop tool for Android device operations through ADB, with versions in Python/PySide6 and Java/JavaFX.', 'Herramienta de escritorio para operaciones con Android mediante ADB, con versiones en Python/PySide6 y Java/JavaFX.', 'Outil desktop pour les opérations Android via ADB, avec des versions en Python/PySide6 et Java/JavaFX.', 'Desktop-Tool für Android-Geräte über ADB, mit Versionen in Python/PySide6 und Java/JavaFX.'],
    ['Fluxo de compra', 'Purchase flow', 'Flujo de compra', 'Parcours d’achat', 'Kaufablauf'],
    ['Fluxo de compra do WooCommerce.', 'WooCommerce purchase flow.', 'Flujo de compra de WooCommerce.', 'Parcours d’achat WooCommerce.', 'WooCommerce-Kaufablauf.'],
    ['PLATAFORMA', 'PLATFORM', 'PLATAFORMA', 'PLATEFORME', 'PLATTFORM'],
    ['Plugin desenvolvido para converter o fluxo de produto do WooCommerce em uma experiência de rifas com números selecionáveis.', 'A plugin developed to adapt WooCommerce product flow for raffles with selectable numbers.', 'Plugin desarrollado para adaptar el flujo de producto de WooCommerce a rifas con números seleccionables.', 'Plugin développé pour adapter le parcours produit WooCommerce aux tombolas avec numéros sélectionnables.', 'Ein Plugin, das den WooCommerce-Produktablauf für Raffles mit auswählbaren Nummern erweitert.'],
    ['Plugin WordPress', 'WordPress plugin', 'Plugin de WordPress', 'Plugin WordPress', 'WordPress-Plugin'],
    ['Plugin WordPress desenvolvido para WooCommerce, com foco em rifas e seleção de números integrada ao fluxo de compra.', 'A WordPress plugin developed for WooCommerce raffles, with number selection integrated into the purchase flow.', 'Plugin de WordPress para WooCommerce centrado en rifas y selección de números integrada al flujo de compra.', 'Plugin WordPress pour WooCommerce, consacré aux tombolas et à la sélection de numéros dans le parcours d’achat.', 'Ein WordPress-Plugin für WooCommerce-Raffles mit Nummernauswahl im Kaufablauf.'],
    ['PRODUTO', 'PRODUCT', 'PRODUCTO', 'PRODUIT', 'PRODUKT'],
    ['PROJETOS · SOFTWARE · PRODUTO', 'PROJECTS · SOFTWARE · PRODUCT', 'PROYECTOS · SOFTWARE · PRODUCTO', 'PROJETS · LOGICIEL · PRODUIT', 'PROJEKTE · SOFTWARE · PRODUKT'],
    ['PROPÓSITO', 'PURPOSE', 'PROPÓSITO', 'OBJECTIF', 'ZWECK'],
    ['PROTÓTIPO', 'PROTOTYPE', 'PROTOTIPO', 'PROTOTYPE', 'PROTOTYP'],
    ['Regras de produto', 'Product rules', 'Reglas de producto', 'Règles produit', 'Produktregeln'],
    ['Rifas com seleção de números.', 'Raffles with number selection.', 'Rifas con selección de números.', 'Tombolas avec sélection de numéros.', 'Raffles mit Nummernauswahl.'],
    ['SVR · FASE DE FUNDAÇÃO', 'SVR · FOUNDATION STAGE', 'SVR · FASE DE FUNDACIÓN', 'SVR · PHASE DE FONDATION', 'SVR · GRÜNDUNGSPHASE'],
    ['Windows · PATH · Variáveis de ambiente · WSL2', 'Windows · PATH · Environment variables · WSL2', 'Windows · PATH · Variables de entorno · WSL2', 'Windows · PATH · Variables d’environnement · WSL2', 'Windows · PATH · Umgebungsvariablen · WSL2'],
    ['~15 milhões', '~15 million', '~15 millones', '~15 millions', '~15 Millionen'],
    ['PLUG-IN', 'PLUGIN', 'PLUGIN', 'PLUGIN', 'PLUGIN'],
    ['01 / E-COMMERCE · PLUGIN', '01 / E-COMMERCE · PLUGIN', '01 / COMERCIO ELECTRÓNICO · PLUGIN', '01 / E-COMMERCE · PLUGIN', '01 / E-COMMERCE · PLUGIN'],
    ['02 / DESKTOP', '02 / DESKTOP', '02 / ESCRITORIO', '02 / BUREAU', '02 / DESKTOP'],
    ['03 / APIs · INTEGRAÇÕES', '03 / APIs · INTEGRATIONS', '03 / APIs · INTEGRACIONES', '03 / API · INTÉGRATIONS', '03 / APIS · INTEGRATIONEN'],
    ['03 / INTEGRAÇÕES', '03 / INTEGRATIONS', '03 / INTEGRACIONES', '03 / INTÉGRATIONS', '03 / INTEGRATIONEN'],
    ['04 / AMBIENTES', '04 / ENVIRONMENTS', '04 / ENTORNOS', '04 / ENVIRONNEMENTS', '04 / UMGEBUNGEN'],
    ['04 / TECNOLOGIAS', '04 / TECHNOLOGIES', '04 / TECNOLOGÍAS', '04 / TECHNOLOGIES', '04 / TECHNOLOGIEN'],
    ['ADB / DESKTOP', 'ADB / DESKTOP', 'ADB / ESCRITORIO', 'ADB / DESKTOP', 'ADB / DESKTOP'],
    ['COMUNIDADES · EXPERIÊNCIA HISTÓRICA', 'COMMUNITIES · HISTORICAL EXPERIENCE', 'COMUNIDADES · EXPERIENCIA HISTÓRICA', 'COMMUNAUTÉS · EXPÉRIENCE PASSÉE', 'COMMUNITYS · FRÜHERE ERFAHRUNG'],
    ['APIs · WEBHOOKS · INTEGRAÇÕES', 'APIs · WEBHOOKS · INTEGRATIONS', 'APIs · WEBHOOKS · INTEGRACIONES', 'API · WEBHOOKS · INTÉGRATIONS', 'APIs · WEBHOOKS · INTEGRATIONEN'],
    ['DISCORD · @NLYNY', 'DISCORD · @NLYNY', 'DISCORD · @NLYNY', 'DISCORD · @NLYNY', 'DISCORD · @NLYNY'],
    ['WordPress e WooCommerce.', 'WordPress and WooCommerce.', 'WordPress y WooCommerce.', 'WordPress et WooCommerce.', 'WordPress und WooCommerce.'],
    ['GITHUB · DISCORD', 'GITHUB · DISCORD', 'GITHUB · DISCORD', 'GITHUB · DISCORD', 'GITHUB · DISCORD'],
    ['03 / SOBRE', '03 / ABOUT', '03 / SOBRE MÍ', '03 / À PROPOS', '03 / ÜBER MICH'],
    ['API do portfólio', 'Portfolio API', 'API del portafolio', 'API du portfolio', 'Portfolio-API'],
    ['SVR / EM DESENVOLVIMENTO', 'SVR / IN DEVELOPMENT', 'SVR / EN DESARROLLO', 'SVR / EN DÉVELOPPEMENT', 'SVR / IN ENTWICKLUNG'],
    ['PROBLEMA', 'PROBLEM', 'PROBLEMA', 'PROBLÈME', 'PROBLEM'],
    ['INICIATIVA EMPRESARIAL', 'BUSINESS INITIATIVE', 'INICIATIVA EMPRESARIAL', 'INITIATIVE ENTREPRENEURIALE', 'UNTERNEHMERISCHE INITIATIVE'],
    ['INTEGRAÇÕES', 'INTEGRATIONS', 'INTEGRACIONES', 'INTÉGRATIONS', 'INTEGRATIONEN'],
    ['INTEGRAÇÃO DO DISCORD', 'DISCORD INTEGRATION', 'INTEGRACIÓN DE DISCORD', 'INTÉGRATION DISCORD', 'DISCORD-INTEGRATION'],
    ['PERFIL: @nlyny', 'PROFILE: @nlyny', 'PERFIL: @nlyny', 'PROFIL : @nlyny', 'PROFIL: @nlyny'],
    ['PROJETO EMPRESARIAL', 'BUSINESS INITIATIVE', 'PROYECTO EMPRESARIAL', 'INITIATIVE ENTREPRENEURIALE', 'UNTERNEHMERISCHE INITIATIVE'],
    ['INFORMAÇÕES CONFIRMADAS', 'CONFIRMED INFORMATION', 'INFORMACIÓN CONFIRMADA', 'INFORMATIONS CONFIRMÉES', 'BESTÄTIGTE INFORMATIONEN'],
    ['INTEGRAÇÃO', 'INTEGRATION', 'INTEGRACIÓN', 'INTÉGRATION', 'INTEGRATION'],
    ['DESKTOP / ANDROID', 'DESKTOP / ANDROID', 'ESCRITORIO / ANDROID', 'BUREAU / ANDROID', 'DESKTOP / ANDROID'],
    ['PROJETOS · SOFTWARE · PRODUTO', 'PROJECTS · SOFTWARE · PRODUCT', 'PROYECTOS · SOFTWARE · PRODUCTO', 'PROJETS · LOGICIEL · PRODUIT', 'PROJEKTE · SOFTWARE · PRODUKT'],
    ['TECNOLOGIAS', 'TECHNOLOGIES', 'TECNOLOGÍAS', 'TECHNOLOGIES', 'TECHNOLOGIEN'],
    ['SVR / FASE DE FUNDAÇÃO', 'SVR / FOUNDATION STAGE', 'SVR / FASE DE FUNDACIÓN', 'SVR / PHASE DE FONDATION', 'SVR / GRÜNDUNGSPHASE'],
    ['EM FASE DE FUNDAÇÃO', 'FOUNDATION STAGE', 'EN FASE DE FUNDACIÓN', 'EN PHASE DE FONDATION', 'IN DER GRÜNDUNGSPHASE'],
    ['SOFTWARE', 'SOFTWARE', 'SOFTWARE', 'LOGICIEL', 'SOFTWARE'],
    ['SISTEMAS', 'SYSTEMS', 'SISTEMAS', 'SYSTÈMES', 'SYSTEME'],
    ['SOFTWARE · SISTEMAS · INTEGRAÇÕES', 'SOFTWARE · SYSTEMS · INTEGRATIONS', 'SOFTWARE · SISTEMAS · INTEGRACIONES', 'LOGICIEL · SYSTÈMES · INTÉGRATIONS', 'SOFTWARE · SYSTEME · INTEGRATIONEN'],
    ['Tem um projeto', 'Have a project', '¿Tienes un proyecto', 'Vous avez un projet', 'Hast du ein Projekt'],
    ['em mente?', 'in mind?', 'en mente?', 'en tête ?', 'im Sinn?'],
    ['sites criados', 'websites created', 'sitios web creados', 'sites web créés', 'erstellte Websites'],
    ['Em diferentes contextos.', 'Across different contexts.', 'En distintos contextos.', 'Dans différents contextes.', 'In unterschiedlichen Kontexten.'],
    ['sistemas empresariais', 'business systems', 'sistemas empresariales', 'systèmes d’entreprise', 'Unternehmenssysteme'],
    ['Completos e privados.', 'Complete and private.', 'Completos y privados.', 'Complets et privés.', 'Vollständig und privat.'],
    ['SELEÇÃO DE NÚMEROS', 'NUMBER SELECTION', 'SELECCIÓN DE NÚMEROS', 'SÉLECTION DE NUMÉROS', 'NUMMERNAUSWAHL'],
    ['BUILD', 'BUILD', 'CREAR', 'CRÉER', 'ENTWICKELN'],
    ['INTEGRATE', 'INTEGRATE', 'INTEGRAR', 'INTÉGRER', 'INTEGRIEREN'],
    ['WEB · SOFTWARE', 'WEB · SOFTWARE', 'WEB · SOFTWARE', 'WEB · LOGICIEL', 'WEB · SOFTWARE'],
    ['Protótipo de uma plataforma para organizar campanhas com painel web, backend em Node.js/Express e webhooks para eventos.', 'A prototype platform for organizing campaigns, with a web dashboard, Node.js/Express backend, and event webhooks.', 'Prototipo de una plataforma para organizar campañas, con panel web, backend en Node.js/Express y webhooks para eventos.', 'Prototype de plateforme pour organiser des campagnes, avec tableau de bord web, backend Node.js/Express et webhooks d’événements.', 'Prototyp einer Plattform zur Organisation von Kampagnen mit Web-Dashboard, Node.js/Express-Backend und Event-Webhooks.'],
    ['Olá, eu sou', 'Hi, I am', 'Hola, soy', 'Bonjour, je suis', 'Hallo, ich bin'],
    ['Desenvolvedor Full Stack', 'Full-Stack Developer', 'Desarrollador Full Stack', 'Développeur Full Stack', 'Full-Stack-Entwickler'],
    ['Web', 'Web', 'Web', 'Web', 'Web'],
    ['APIs', 'APIs', 'API', 'API', 'APIs'],
  ];

  const dictionaries = Object.fromEntries(supported.map((locale) => [locale, {}]));
  for (const [pt, en, es, fr, de] of rows) {
    dictionaries.en[pt] = en;
    dictionaries.es[pt] = es;
    dictionaries.fr[pt] = fr;
    dictionaries.de[pt] = de;
  }

  const messages = {
    'pt-BR': { themeLight: 'Tema claro', themeDark: 'Tema escuro', themeAriaLight: 'Mudar para tema claro', themeAriaDark: 'Mudar para tema escuro', copied: 'Copiado', copyDiscord: 'Copiar @nlyny', copyFallback: '@nlyny', status_online: 'ONLINE', status_idle: 'AUSENTE', status_dnd: 'NÃO PERTURBE', status_offline: 'OFFLINE', statusStale: 'ÚLTIMO ESTADO · BOT DESCONECTADO', statusWaiting: 'AGUARDANDO PRESENÇA', statusUnavailable: 'STATUS INDISPONÍVEL', gateway_live: 'GATEWAY: CONECTADO', gateway_stale: 'GATEWAY: ÚLTIMO ESTADO', gateway_waiting: 'GATEWAY: AGUARDANDO PRESENÇA', gateway_unavailable: 'GATEWAY: INDISPONÍVEL', activityStale: 'A conexão caiu. O estado exibido é o último recebido.', activityWaiting: 'Aguardando os primeiros dados de presença do Discord.', activityUnavailable: 'Presença indisponível. Perfil público: @nlyny.', activityOffline: 'Sem presença compartilhada no momento.', activityNone: 'Nenhuma atividade compartilhada.', discordProfile: 'Perfil do Discord', filterOne: ' projeto exibido', filterMany: ' projetos exibidos' },
    en: { themeLight: 'Light theme', themeDark: 'Dark theme', themeAriaLight: 'Switch to light theme', themeAriaDark: 'Switch to dark theme', copied: 'Copied', copyDiscord: 'Copy @nlyny', copyFallback: '@nlyny', status_online: 'ONLINE', status_idle: 'IDLE', status_dnd: 'DO NOT DISTURB', status_offline: 'OFFLINE', statusStale: 'LAST STATUS · BOT DISCONNECTED', statusWaiting: 'WAITING FOR PRESENCE', statusUnavailable: 'STATUS UNAVAILABLE', gateway_live: 'GATEWAY: CONNECTED', gateway_stale: 'GATEWAY: LAST STATUS', gateway_waiting: 'GATEWAY: WAITING FOR PRESENCE', gateway_unavailable: 'GATEWAY: UNAVAILABLE', activityStale: 'Connection lost. Showing the last received status.', activityWaiting: 'Waiting for Discord presence data.', activityUnavailable: 'Presence unavailable. Public profile: @nlyny.', activityOffline: 'No shared presence at the moment.', activityNone: 'No activity shared.', discordProfile: 'Discord profile', filterOne: ' project shown', filterMany: ' projects shown' },
    es: { themeLight: 'Tema claro', themeDark: 'Tema oscuro', themeAriaLight: 'Cambiar al tema claro', themeAriaDark: 'Cambiar al tema oscuro', copied: 'Copiado', copyDiscord: 'Copiar @nlyny', copyFallback: '@nlyny', status_online: 'EN LÍNEA', status_idle: 'AUSENTE', status_dnd: 'NO MOLESTAR', status_offline: 'DESCONECTADO', statusStale: 'ÚLTIMO ESTADO · BOT DESCONECTADO', statusWaiting: 'ESPERANDO PRESENCIA', statusUnavailable: 'ESTADO NO DISPONIBLE', gateway_live: 'GATEWAY: CONECTADO', gateway_stale: 'GATEWAY: ÚLTIMO ESTADO', gateway_waiting: 'GATEWAY: ESPERANDO PRESENCIA', gateway_unavailable: 'GATEWAY: NO DISPONIBLE', activityStale: 'Se perdió la conexión. Se muestra el último estado recibido.', activityWaiting: 'Esperando los primeros datos de presencia de Discord.', activityUnavailable: 'Presencia no disponible. Perfil público: @nlyny.', activityOffline: 'No hay presencia compartida en este momento.', activityNone: 'No hay actividad compartida.', discordProfile: 'Perfil de Discord', filterOne: ' proyecto mostrado', filterMany: ' proyectos mostrados' },
    fr: { themeLight: 'Thème clair', themeDark: 'Thème sombre', themeAriaLight: 'Passer au thème clair', themeAriaDark: 'Passer au thème sombre', copied: 'Copié', copyDiscord: 'Copier @nlyny', copyFallback: '@nlyny', status_online: 'EN LIGNE', status_idle: 'ABSENT', status_dnd: 'NE PAS DÉRANGER', status_offline: 'HORS LIGNE', statusStale: 'DERNIER ÉTAT · BOT DÉCONNECTÉ', statusWaiting: 'EN ATTENTE DE PRÉSENCE', statusUnavailable: 'STATUT INDISPONIBLE', gateway_live: 'GATEWAY : CONNECTÉ', gateway_stale: 'GATEWAY : DERNIER ÉTAT', gateway_waiting: 'GATEWAY : EN ATTENTE', gateway_unavailable: 'GATEWAY : INDISPONIBLE', activityStale: 'Connexion perdue. Dernier état reçu affiché.', activityWaiting: 'En attente des premières données de présence Discord.', activityUnavailable: 'Présence indisponible. Profil public : @nlyny.', activityOffline: 'Aucune présence partagée pour le moment.', activityNone: 'Aucune activité partagée.', discordProfile: 'Profil Discord', filterOne: ' projet affiché', filterMany: ' projets affichés' },
    de: { themeLight: 'Helles Design', themeDark: 'Dunkles Design', themeAriaLight: 'Helles Design aktivieren', themeAriaDark: 'Dunkles Design aktivieren', copied: 'Kopiert', copyDiscord: '@nlyny kopieren', copyFallback: '@nlyny', status_online: 'ONLINE', status_idle: 'ABWESEND', status_dnd: 'BITTE NICHT STÖREN', status_offline: 'OFFLINE', statusStale: 'LETZTER STATUS · BOT GETRENNT', statusWaiting: 'WARTE AUF PRÄSENZ', statusUnavailable: 'STATUS NICHT VERFÜGBAR', gateway_live: 'GATEWAY: VERBUNDEN', gateway_stale: 'GATEWAY: LETZTER STATUS', gateway_waiting: 'GATEWAY: WARTE AUF PRÄSENZ', gateway_unavailable: 'GATEWAY: NICHT VERFÜGBAR', activityStale: 'Verbindung getrennt. Der letzte empfangene Status wird angezeigt.', activityWaiting: 'Warte auf erste Discord-Präsenzdaten.', activityUnavailable: 'Präsenz nicht verfügbar. Öffentliches Profil: @nlyny.', activityOffline: 'Derzeit keine geteilte Präsenz.', activityNone: 'Keine Aktivität geteilt.', discordProfile: 'Discord-Profil', filterOne: ' Projekt angezeigt', filterMany: ' Projekte angezeigt' },
  };

  const metadata = {
    'index.html': {
      'pt-BR': ['Marcos Vinicius — Desenvolvedor Full Stack em formação', 'Portfólio de Marcos Vinicius: desenvolvimento web, software para desktop e integrações entre aplicações e serviços.', 'Marcos Vinicius — Desenvolvedor Full Stack em formação', 'Projetos de desenvolvimento web, software para desktop e integrações, com escopo e estágio apresentados com clareza.'],
      en: ['Marcos Vinicius — Full-Stack Developer in Training', 'Portfolio of Marcos Vinicius: web development, desktop software, and integrations between applications and services.', 'Marcos Vinicius — Full-Stack Developer in Training', 'Web development, desktop software, and integration projects with clearly described scope and status.'],
      es: ['Marcos Vinicius — Desarrollador Full Stack en formación', 'Portafolio de Marcos Vinicius: desarrollo web, software de escritorio e integraciones entre aplicaciones y servicios.', 'Marcos Vinicius — Desarrollador Full Stack en formación', 'Proyectos de desarrollo web, software de escritorio e integraciones con alcance y estado claramente descritos.'],
      fr: ['Marcos Vinicius — Développeur Full Stack en formation', 'Portfolio de Marcos Vinicius : développement web, logiciels de bureau et intégrations entre applications et services.', 'Marcos Vinicius — Développeur Full Stack en formation', 'Projets web, logiciels de bureau et intégrations au périmètre et à l’avancement clairement décrits.'],
      de: ['Marcos Vinicius — Full-Stack-Entwickler in Ausbildung', 'Portfolio von Marcos Vinicius: Webentwicklung, Desktop-Software und Integrationen zwischen Anwendungen und Diensten.', 'Marcos Vinicius — Full-Stack-Entwickler in Ausbildung', 'Web-, Desktop- und Integrationsprojekte mit klar beschriebenem Umfang und Status.'],
    },
    'svr.html': {
      'pt-BR': ['SVR — Em fase de fundação | Marcos Vinicius', 'A SVR é uma iniciativa empresarial de tecnologia em fase de fundação. Escopo e produtos ainda estão sendo definidos.', 'SVR — Iniciativa empresarial em fase de fundação', 'A SVR está em fase de fundação. Escopo e produtos serão apresentados conforme forem definidos.'],
      en: ['SVR — Foundation Stage | Marcos Vinicius', 'SVR is a technology business initiative in its foundation stage. Its scope and products are still being defined.', 'SVR — Technology Business Initiative', 'SVR is in its foundation stage. Its scope and products will be presented as they are defined.'],
      es: ['SVR — En fase de fundación | Marcos Vinicius', 'SVR es una iniciativa empresarial tecnológica en fase de fundación. Su alcance y sus productos aún se están definiendo.', 'SVR — Iniciativa empresarial tecnológica', 'SVR está en fase de fundación. Su alcance y sus productos se presentarán a medida que se definan.'],
      fr: ['SVR — En phase de fondation | Marcos Vinicius', 'SVR est une initiative entrepreneuriale technologique en phase de fondation. Son périmètre et ses produits sont en cours de définition.', 'SVR — Initiative entrepreneuriale technologique', 'SVR est en phase de fondation. Son périmètre et ses produits seront présentés au fur et à mesure de leur définition.'],
      de: ['SVR — In der Gründungsphase | Marcos Vinicius', 'SVR ist eine unternehmerische Technologieinitiative in der Gründungsphase. Umfang und Produkte werden noch definiert.', 'SVR — Unternehmerische Technologieinitiative', 'SVR befindet sich in der Gründungsphase. Umfang und Produkte werden vorgestellt, sobald sie feststehen.'],
    },
    'projetos.html': {
      'pt-BR': ['Projetos de software | Marcos Vinicius', 'Projetos de Marcos Vinicius em e-commerce, software para desktop e integrações.', 'Projetos de software | Marcos Vinicius', 'Plugin para WooCommerce, ferramenta Android via ADB e protótipo de campanhas para WhatsApp.'],
      en: ['Software Projects | Marcos Vinicius', 'Projects by Marcos Vinicius in e-commerce, desktop software, and integrations.', 'Software Projects | Marcos Vinicius', 'A WooCommerce plugin, Android ADB desktop tool, and WhatsApp campaign prototype.'],
      es: ['Proyectos de software | Marcos Vinicius', 'Proyectos de Marcos Vinicius en comercio electrónico, software de escritorio e integraciones.', 'Proyectos de software | Marcos Vinicius', 'Plugin para WooCommerce, herramienta Android con ADB y prototipo de campañas para WhatsApp.'],
      fr: ['Projets logiciels | Marcos Vinicius', 'Projets de Marcos Vinicius en e-commerce, logiciels de bureau et intégrations.', 'Projets logiciels | Marcos Vinicius', 'Plugin WooCommerce, outil desktop Android via ADB et prototype de campagnes WhatsApp.'],
      de: ['Softwareprojekte | Marcos Vinicius', 'Projekte von Marcos Vinicius in E-Commerce, Desktop-Software und Integrationen.', 'Softwareprojekte | Marcos Vinicius', 'WooCommerce-Plugin, Android-ADB-Desktop-Tool und WhatsApp-Kampagnenprototyp.'],
    },
    'sistemas.html': {
      'pt-BR': ['Tecnologias e experiência | Marcos Vinicius', 'Linguagens de programação e ferramentas demonstradas nos projetos de Marcos Vinicius.', 'Tecnologias e experiência | Marcos Vinicius', 'Linguagens de programação e ferramentas usadas nos projetos de Marcos Vinicius.'],
      en: ['Technologies and Experience | Marcos Vinicius', 'Programming languages and tools demonstrated in Marcos Vinicius’s projects.', 'Technologies and Experience | Marcos Vinicius', 'Programming languages and tools used across Marcos Vinicius’s projects.'],
      es: ['Tecnologías y experiencia | Marcos Vinicius', 'Lenguajes de programación y herramientas demostrados en los proyectos de Marcos Vinicius.', 'Tecnologías y experiencia | Marcos Vinicius', 'Lenguajes y herramientas utilizados en los proyectos de Marcos Vinicius.'],
      fr: ['Technologies et expérience | Marcos Vinicius', 'Langages de programmation et outils présentés dans les projets de Marcos Vinicius.', 'Technologies et expérience | Marcos Vinicius', 'Langages et outils utilisés dans les projets de Marcos Vinicius.'],
      de: ['Technologien und Erfahrung | Marcos Vinicius', 'Programmiersprachen und Werkzeuge aus den Projekten von Marcos Vinicius.', 'Technologien und Erfahrung | Marcos Vinicius', 'Programmiersprachen und Werkzeuge in den Projekten von Marcos Vinicius.'],
    },
    'contato.html': {
      'pt-BR': ['Contato | Marcos Vinicius', 'Contato de Marcos Vinicius: perfil do GitHub e Discord.', 'Contato — Marcos Vinicius', 'Fale com Marcos Vinicius pelo GitHub ou Discord.'],
      en: ['Contact | Marcos Vinicius', 'Contact Marcos Vinicius through GitHub or Discord.', 'Contact — Marcos Vinicius', 'Get in touch with Marcos Vinicius on GitHub or Discord.'],
      es: ['Contacto | Marcos Vinicius', 'Contacta con Marcos Vinicius a través de GitHub o Discord.', 'Contacto — Marcos Vinicius', 'Ponte en contacto con Marcos Vinicius por GitHub o Discord.'],
      fr: ['Contact | Marcos Vinicius', 'Contactez Marcos Vinicius via GitHub ou Discord.', 'Contact — Marcos Vinicius', 'Contactez Marcos Vinicius sur GitHub ou Discord.'],
      de: ['Kontakt | Marcos Vinicius', 'Kontaktiere Marcos Vinicius über GitHub oder Discord.', 'Kontakt — Marcos Vinicius', 'Nimm über GitHub oder Discord Kontakt mit Marcos Vinicius auf.'],
    },
  };

  const ariaTranslations = {
    'Marcos Vinicius, início': { en: 'Marcos Vinicius, home', es: 'Marcos Vinicius, inicio', fr: 'Marcos Vinicius, accueil', de: 'Marcos Vinicius, Startseite' },
    'Navegação principal': { en: 'Main navigation', es: 'Navegación principal', fr: 'Navigation principale', de: 'Hauptnavigation' },
    'Navegação do rodapé': { en: 'Footer navigation', es: 'Navegación del pie de página', fr: 'Navigation de pied de page', de: 'Fußnavigation' },
    'Tecnologias e áreas de trabalho': { en: 'Technologies and areas of work', es: 'Tecnologías y áreas de trabajo', fr: 'Technologies et domaines de travail', de: 'Technologien und Arbeitsbereiche' },
    'Filtrar projetos': { en: 'Filter projects', es: 'Filtrar proyectos', fr: 'Filtrer les projets', de: 'Projekte filtern' },
    'Conversar sobre o case Android': { en: 'Discuss the Android project', es: 'Hablar sobre el proyecto Android', fr: 'Parler du projet Android', de: 'Über das Android-Projekt sprechen' },
    'Conversar sobre o case WhatsApp': { en: 'Discuss the WhatsApp project', es: 'Hablar sobre el proyecto de WhatsApp', fr: 'Parler du projet WhatsApp', de: 'Über das WhatsApp-Projekt sprechen' },
    Idioma: { en: 'Language', es: 'Idioma', fr: 'Langue', de: 'Sprache' },
  };

  function resolveLocale(value) {
    if (!value) return null;
    const normalized = value.toLowerCase();
    if (normalized.startsWith('pt')) return 'pt-BR';
    if (normalized.startsWith('en')) return 'en';
    if (normalized.startsWith('es')) return 'es';
    if (normalized.startsWith('fr')) return 'fr';
    if (normalized.startsWith('de')) return 'de';
    return null;
  }

  let savedLocale = null;
  try { savedLocale = localStorage.getItem('mv-portfolio-language'); } catch {  }
  const locale = resolveLocale(savedLocale) || resolveLocale(navigator.language) || 'pt-BR';
  const dictionary = dictionaries[locale] || {};

  if (locale !== 'pt-BR') {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const value = node.nodeValue;
      const trimmed = value.trim();
      const translated = dictionary[trimmed];
      if (!translated) continue;
      const leading = value.match(/^\s*/)[0];
      const trailing = value.match(/\s*$/)[0];
      node.nodeValue = leading + translated + trailing;
    }

    document.querySelectorAll('[aria-label]').forEach((element) => {
      const translated = ariaTranslations[element.getAttribute('aria-label')]?.[locale];
      if (translated) element.setAttribute('aria-label', translated);
    });
  }

  document.documentElement.lang = locale;
  document.body.dataset.locale = locale;
  const page = location.pathname.split('/').pop() || 'index.html';
  const meta = metadata[page]?.[locale];
  if (meta) {
    document.title = meta[0];
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta[1]);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta[2]);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta[3]);
  }
  let ogLocale = document.querySelector('meta[property="og:locale"]');
  if (!ogLocale) {
    ogLocale = document.createElement('meta');
    ogLocale.setAttribute('property', 'og:locale');
    document.head.append(ogLocale);
  }
  ogLocale.setAttribute('content', { 'pt-BR': 'pt_BR', en: 'en_US', es: 'es_ES', fr: 'fr_FR', de: 'de_DE' }[locale]);

  const languageSelect = document.querySelector('#language-select');
  if (languageSelect) {
    languageSelect.value = locale;
    languageSelect.addEventListener('change', () => {
      const nextLocale = resolveLocale(languageSelect.value);
      if (!nextLocale || !supported.includes(nextLocale)) return;
      try { localStorage.setItem('mv-portfolio-language', nextLocale); } catch {  }
      location.reload();
    });
  }

  window.portfolioI18n = {
    locale,
    t(key) { return messages[locale]?.[key] || messages['pt-BR'][key] || key; },
  };
})();
