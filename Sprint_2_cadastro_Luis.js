
    let Placa_mãe = [
                {
                    "Nome_do_Componente" : "Placa-Mãe Gigabyte Z690 Aorus Elite AX",
                    "Fabricante" : "Gigabyte",
                    "Socket" : "lga1700",
                    "Geração_Compatível" : [12],    //fiz assim pois uma placa mãe pode suportar mais de uma geração, então imagino que assim dá pra fazer um array com as gerações surpotadas
                    "Tipo_de_memória_RAM" : "DDR4",
                    "Slots_de_memória_RAM" : 4,
                    "Suporte_para_perfil_XPM": true,
                    "Frequência_máxima_perfil_XPM": 5333,   //Dado em Mhz
                    "Entradas_PCIE_X16": 1,   //Se 0 não funciona placa de video
                    "Conectores_SATA": 6,
                    "Interface_SATA": 3.0, //3.0 = 6gb/s  2.0 = 3Gb/s 
                    "Conectores_M2": 4,
                    "Conectores_NVME": 4,
                    "PCIE_máx_conectores_NVME": 4.0,
                },
                {
                    "Nome_do_Componente" : "Placa Mãe MSI A520M-A PRO mATX",
                    "Fabricante" : "MSI",
                    "Socket" : "AM4",
                    "Geração_Compatível" : [1,2,3,4],   
                    "Tipo_de_memória_RAM" : "DDR4",
                    "Slots_de_memória_RAM" : 2,
                    "Suporte_para_perfil_XPM": true,
                    "Frequência_máxima_perfil_XPM": 4600,   
                    "Entradas_PCIE_X16": 1,    
                    "Conectores_SATA": 4,
                    "Interface_SATA": 3.0,
                    "Conectores_M2": 1,
                    "Conectores_NVME": 1,
                    "PCIE_máx_conectores_NVME": 3.0,
                }
                
            ]
    let Processador =  [
                {
                    "Nome_do_componente": "Intel Core i7-12700K",
                    "Fabricante" : "Intel",
                    "Socket": "lga1700",
                    "Geração":  12,
                    "Frequência_máxima_de_memória_RAM" : ["DDR4", 3200,"DDR5", 4800],   //Dado em Mhz
                    "Frequência_Base": 3.6, //Dado em Ghz
                    "Frequência_Turbo": 5.0,    //Dado em Ghz
                    "Potência_básica_do_processador": 125,  //Dado em W
                    "Núcleos": 12,
                    "Threads": 20,
                    "Memória_cache": 25,    //Dado em Mb
                    "Gráfico_integrado": true,
                    "Desbloqueado_para_overclock": true,
                },
                {
                    "Nome_do_componente": "AMD Ryzen™ 5 4600G",
                    "Fabricante" : "AMD",
                    "Socket": "AM4",
                    "Geração":  3,
                    "Frequência_máxima_de_memória_RAM" : ["DDR4", 3200],  
                    "Frequência_Base": 3.7, 
                    "Frequência_Turbo": 4.2,   
                    "Potência_básica_do_processador": 65, 
                    "Núcleos": 6,
                    "Threads": 12,
                    "Memória_cache": 11,    
                    "Gráfico_integrado": true,
                    "Desbloqueado_para_overclock": true,
                },
                {
                    "Nome_do_componente": "AMD Ryzen™ 3 3200G",
                    "Fabricante" : "AMD",
                    "Socket": "AM4",
                    "Geração":  3,
                    "Frequência_máxima_de_memória_RAM" : ["DDR4", 2933],  
                    "Frequência_Base": 3.6, 
                    "Frequência_Turbo": 4,   
                    "Potência_básica_do_processador": 65, 
                    "Núcleos": 4,
                    "Threads": 4,
                    "Memória_cache": 4,    
                    "Gráfico_integrado": true,
                    "Desbloqueado_para_overclock": true,
                }

            ]

    let Memória_RAM = [
                {
                    "Nome_do_componente": "Kingston Fury Beast",
                    "Modelo": "KF432C16BB/8",
                    "Fabricante": "Kingston",
                    "Tipo_de_memoria_RAM": "DDR4",
                    "Velocidade_Memória": 3200, //Dado em Mhz
                    "Latência_(cl)": 16,    //Latência, não tem nenhuma unidade de medida específica
                    "Capacidade": 8,    //Dado em Gb
                    "Suporta_oficialmente_Overclock": true,
                    "Possui_dissipador_de_calor":  true,
                },
                {
                    "Nome_do_componente": "Memória Corsair Vengeance LPX",
                    "Modelo": "CMK8GX4M1Z3200C16",
                    "Fabricante": "Corsair",
                    "Tipo_de_memoria_RAM": "DDR4",
                    "Velocidade_Memória": 3200, 
                    "Latência_(cl)": 16,    
                    "Capacidade": 8,   
                    "Suporta_oficialmente_Overclock": true,
                    "Possui_dissipador_de_calor":  true,
                },
                {
                    "Nome_do_componente": "Memória XPG Lancer",
                    "Modelo": "AX5U6000C4016G-CLARBK",
                    "Fabricante": "XPG",
                    "Tipo_de_memoria_RAM": "DDR5",
                    "Velocidade_Memória": 6000, 
                    "Latência_(cl)": 40,  
                    "Capacidade": 16,   
                    "Suporta_oficialmente_Overclock": true,
                    "Possui_dissipador_de_calor":  true,
                },

    ]
    
    let Placa_de_vídeo = [
                {
                    "Nome_do_componente": "RTX 4090 Gaming Trio MSI NVIDIA",
                    "Fabricante_do_chipset": "Nvidea",
                    "Marca": "MSI",
                    "Potência_de_fonte_recomendada": 850,   //Dado em W
                    "Potência_da_placa_de_vídeo": 350,  //Dado em W
                    "Tecnologia_PCIE": 4.0,
                    "Quantidade_de_Vram": 24,   //Dado em Gb
                    "Tecnologia_Vram": "GDDR6X",
                    "Interface": 384,   //Dado em bits
                    "Quantidade_de_CUDA_cores": 16384,
                    "Base_clock": 1.40, //Dado em Ghz
                    "Boost_clock": 1.70,    //Gado em Ghz
                    "Número_de_fans": 3,
                },
                {
                    "Nome_do_componente": "Placa de Vídeo RTX 2060 Ventus MSI ",
                    "Fabricante_do_chipset": "Nvidea",
                    "Marca": "MSI",
                    "Potência_de_fonte_recomendada": 500,   //Dado em W
                    "Potência_da_placa_de_vídeo": 350,  //Dado em W
                    "Tecnologia_PCIE": 4.0,
                    "Quantidade_de_Vram": 24,   //Dado em Gb
                    "Tecnologia_Vram": "GDDR6X",
                    "Interface": 384,   //Dado em bits
                    "Quantidade_de_CUDA_cores": 16384,
                    "Base_clock": 1.40, //Dado em Ghz
                    "Boost_clock": 1.70,    //Gado em Ghz
                    "Número_de_fans": 2,
                }
            ]

    let Fonte = [
        {
            "Nome_do_componente": "MSI MPG A850G PCIE5",
            "Modelo": "306-7ZP7B12-CE0",
            "Fabricante": "MSI",
            "Potência": 850, //Dado em W
            "Fonte_modular": true,
            "Classificação_de_eficiência": "80 Plus Gold", //80PLUS < 80PLUS BRONZE < 80PLUS siLVER < 80PLUS GOLD < 80PLUS PLATINUM < 80PLUS TITANIUM
        },
        {
            "Nome_do_componente": "Fonte Corsair CV550",
            "Modelo": "CP-9020210-BR",
            "Fabricante": "Corsair",
            "Potência": 550, 
            "Fonte_modular": false,
            "Classificação_de_eficiência": "80 Plus Bronze",
        }
    ]
    let Cooler = [
        {
            "Nome_do_componente": "Water Cooler Corsair H150",
            "Modelo": "CW-9060053-WW",
            "Fabricante": "Corsair",
            "Tipo_de_socket":  ["AM5", "AM4","lga1700", "lga1200", "lga1150", "lga1151", "lga1155", "lga1156", "lga1366", "lg2011", "lga2066"],
            "Water_cooler": true,
            "Tamanho_das_fans": 360, //Dado em mm
            "Número_de_fans": 3,
        },
        {
            "Nome_do_componente": "Cooler para Processador Cooler Master HYPER H410R",
            "Modelo": "RR-H410-20PK-R1",
            "Fabricante": "Cooler Master",
            "Tipo_de_socket":  ["AM4", "AM3", "AM2", "FM2", "FM1", "lga1200", "lga1150", "lga1151", "lga1155", "lga1156", "lga775"],
            "Water_cooler": false,
            "Tamanho_das_fans": 92, //Dado em mm
            "Número_de_fans": 1,
        }
    ]

    //Apartir daqui é a área de armazenamento
    let SSD_M2_NVME = [
        {
            "Nome_do_componente": "Adata Legend 710",
            "Modelo": "ALEG-710-512GCS",
            "Fabricante": "Adata",
            "Tipo_de_PCIE": 3.0,
            "Leitura_sequencial": 2400,//Dado em Mb/s
            "Gravação_sequencial": 1800,// Dado em Mb/s
            "Armazenamento": 512, //Dadp em Gb
            "Possui_dissipador_de_calor": true,
            "Expectativa_de_vida_útil": 1.5, //Dado em milhões de horas MTB
        },
        {
            "Nome_do_componente": "SSD Kingston Fury Renegade",
            "Modelo": "SFYRS/1000G",
            "Fabricante": "Kingston",
            "Tipo_de_PCIE": 4.0,
            "Leitura_sequencial": 7300,
            "Gravação_sequencial": 6000,
            "Armazenamento": 1024, 
            "Possui_dissipador_de_calor": true,
            "Expectativa_de_vida_útil": 1.8, 
        }
    ]

    let SSD_M2_SATA = [
        {
            "Nome_do_componente": "SSD 250 GB WD Blue, M.2",
            "Modelo": "WDS250G3B0B",
            "Fabricante": "Western digital",
            "Interface SATA": [3.0, 2.0],
            "Leitura_sequencial": 555,//Dado em Mb/s
            "Gravação_sequencial": 440,// Dado em Mb/s
            "Armazenamento": 250, //Dadp em Gb
            "Possui_dissipador_de_calor": true,
            "Expectativa_de_vida_útil": 1.75, //Dado em milhões de horas MTB
        }
        
    ]
    let SSD_SATA = [
        {
            "Nome_do_componente": "SSD 240 GB Kingston A400",
            "Modelo": "SA400S37/240G",
            "Fabricante": "Kingston",
            "Leitura_sequencial": 500,//Dado em Mb/s
            "Gravação_sequencial": 300,// Dado em Mb/s
            "Armazenamento": 240, //Dadp em Gb
            "Expectativa_de_vida_útil": 1, //Dado em milhões de horas MTB
        }
    ]

    let HD_SATA = [
        {
            "Nome_do_componente": "HD Seagate BarraCuda, 3.5', SATA - ST4000DM004",
            "Fabricante": "Seagate",
            "Cache": 256, //Dado em Mb
            "Velocidade": 5400, //Dado em rpm
            "Interface_SATA": 3.5,
            "Armazenamento": 4096, //Dadp em Gb
            "Taxa_de_transferência_da_interface_SATA": 600, //Dado em MB/s
            "Taxa_máxima_de_transferência_de_dados": 190, //Dado em Mb/s
        }
    ]
