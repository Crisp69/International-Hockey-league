let sortDirection = false;
let personData = [
        
        // BARDEJOV //
         {'position': 'RW','flag':'<img src="img/nat/bra.gif" height="12">', 'name':' Giovani Teles ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 29,'rating': 429, 
                                                                        'points':8, 'goals':5, 'asists': 3,  }, 

         {'position': 'RW','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Jakub Buček ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 30,'rating': 427, 
                                                                        'points':7, 'goals':6, 'asists': 1,  },

         {'position': 'RW','flag':'<img src="img/nat/mad.gif" height="12">', 'name':'  Alajos Bocskai ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 35,'rating': 388, 
                                                                        'points':3, 'goals':3, 'asists': 0,  }, 

         {'position': 'C','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Filip Kaštyl ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 31,'rating': 410, 
                                                                        'points':20, 'goals':1, 'asists': 19,  },

         {'position': 'C','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Dzianis Miadzvedz ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 34,'rating': 347, 
                                                                        'points':4, 'goals':0, 'asists': 4,  }, 

         {'position': 'C','flag':'<img src="img/nat/biel.gif" height="12">', 'name':' Ján Maras ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 31,'rating': 424, 
                                                                        'points':16, 'goals':2, 'asists': 14,  },

         {'position': 'LW','flag':'<img src="img/nat/bel.gif" height="12">', 'name':' Siebe Hondshoven   ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 25,'rating': 304, 
                                                                        'points':5, 'goals':4, 'asists': 1,  },

         {'position': 'LW','flag':'<img src="img/nat/ir.gif" height="12">', 'name':' Robert Henry  ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 30,'rating': 457, 
                                                                        'points':17, 'goals':12, 'asists': 5,  },

         {'position': 'LW','flag':'<img src="img/nat/fin.gif" height="12">', 'name':' Einari Vuollu  ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 29,'rating': 433, 
                                                                        'points':14, 'goals':11, 'asists': 3,  },

         {'position': 'RD','flag':'<img src="img/nat/sva.gif" height="12">', 'name':'Raphael Grogg  ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 31,'rating': 320, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

         {'position': 'RD','flag':'<img src="img/nat/biel.gif" height="12">', 'name':'Pimen Karakou  ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 31,'rating': 395, 
                                                                        'points':2, 'goals':0, 'asists': 2,  },    

         {'position': 'LD','flag':'<img src="img/nat/hr.gif" height="12">', 'name':'Fabijan Drempetić  ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 31,'rating': 425, 
                                                                        'points':3, 'goals':0, 'asists': 3,  },  




        // BYSTRICA //
        {'position': 'RW','flag':'<img src="img/nat/nem.gif" height="12">', 'name':'  Jörg Münzner ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 35,'rating': 384, 
                                                                        'points':8, 'goals':5, 'asists': 3,  },
        
        {'position': 'RW','flag':'<img src="img/nat/sve.gif" height="12">', 'name':'  William Bertilsson ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 33,'rating': 376, 
                                                                        'points':2, 'goals':1, 'asists': 1,  },

        {'position': 'RW','flag':'<img src="img/nat/fra.gif" height="12">', 'name':'  Jérémy Chretien ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 29,'rating': 308, 
                                                                        'points':4, 'goals':4, 'asists': 0,  },
        
        {'position': 'C','flag':'<img src="img/nat/domr.gif" height="12">', 'name':'   Dionisio Duarte <img src="img/nat/domr.gif" height="16" style="padding-bottom: 6px;">  ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 29,'rating': 354, 
                                                                        'points':3, 'goals':0, 'asists': 3,  },
                                                                        
        {'position': 'C','flag':'<img src="img/nat/sva.gif" height="12">', 'name':'  Fritz Stahel ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 29,'rating': 354, 
                                                                        'points':20, 'goals':0, 'asists': 20,  },

        {'position': 'C','flag':'<img src="img/nat/cz.gif" height="12">', 'name':'  Jan Šindelář ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 33,'rating': 373, 
                                                                        'points':2, 'goals':1, 'asists': 1,  },

        {'position': 'C','flag':'<img src="img/nat/cz.gif" height="12">', 'name':'  Martin Doležal ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 34,'rating': 442, 
                                                                        'points':3, 'goals':1, 'asists': 2,  },

        {'position': 'LW','flag':'<img src="img/nat/mad.gif" height="12">', 'name':'  Miklós Lukács ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 26,'rating': 324, 
                                                                        'points':8, 'goals':8, 'asists': 0,  },

        {'position': 'LW','flag':'<img src="img/nat/ir.gif" height="12">', 'name':'  Dougal Ethelbert ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 35,'rating': 430, 
                                                                        'points':5, 'goals':5, 'asists': 0,  },

        {'position': 'LW','flag':'<img src="img/nat/sva.gif" height="12">', 'name':' Reto Moggi ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 28,'rating': 296, 
                                                                        'points':4, 'goals':2, 'asists': 2,  },

        {'position': 'LW','flag':'<img src="img/nat/rus.gif" height="12">', 'name':' Maksim Zheleznov ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 30,'rating': 330, 
                                                                        'points':6, 'goals':4, 'asists': 2,  },
        
        {'position': 'LW','flag':'<img src="img/nat/slo.gif" height="12">', 'name':' Jure Murič ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 33,'rating': 318, 
                                                                        'points':2, 'goals':1, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/sva.gif" height="12">', 'name':'  Adolph Burkhart ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 34,'rating': 331, 
                                                                        'points':1, 'goals':1, 'asists': 0,  },
     
        {'position': 'RD','flag':'<img src="img/nat/fin.gif" height="12">', 'name':'  Niklas Laisi ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 35,'rating': 382, 
                                                                        'points':4, 'goals':1, 'asists': 3,  },

        {'position': 'RD','flag':'<img src="img/nat/nem.gif" height="12">', 'name':'  Hubert Rehaag ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 34,'rating': 402, 
                                                                        'points':4, 'goals':0, 'asists': 4,  },

        {'position': 'RD','flag':'<img src="img/nat/lot.gif" height="12">', 'name':'  Francis Runcis ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 32,'rating': 310, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },
         
        {'position': 'LD','flag':'<img src="img/nat/lot.gif" height="12">', 'name':' Lauris Lācplēsējs ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 33,'rating': 354, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LD','flag':'<img src="img/nat/lot.gif" height="12">', 'name':' Zigmunds Laviņš ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 32,'rating': 402, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },                                                                



        
        // DETVA //
        {'position': 'RW','flag':'<img src="img/nat/rus.gif" height="12">', 'name':'Aaron Hagerty ', 'club':'<img src=img/small/detva-small.png> Detva','age': 22,'rating': 400, 
                                                                        'points':6, 'goals':5, 'asists': 1,  },
        
        {'position': 'RW','flag':'<img src="img/nat/peru.gif" height="12">', 'name':' Roger Rebaza ', 'club':'<img src=img/small/detva-small.png> Detva','age': 26,'rating': 355, 
                                                                        'points':5, 'goals':4, 'asists': 1,  },

        {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Egon Sopík ', 'club':'<img src=img/small/detva-small.png> Detva','age': 26,'rating': 322, 
                                                                        'points':7, 'goals':5, 'asists': 2,  },

        {'position': 'RW','flag':'<img src="img/nat/chile.gif" height="12">', 'name':' Adrián Ortiz ', 'club':'<img src=img/small/detva-small.png> Detva','age': 25,'rating': 325, 
                                                                        'points':7, 'goals':4, 'asists': 3,  },

        {'position': 'C','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Jakub Frydrych ', 'club':'<img src=img/small/detva-small.png> Detva','age': 25,'rating': 302, 
                                                                        'points':10, 'goals':1, 'asists': 9,  },

        {'position': 'C','flag':'<img src="img/nat/newz.gif" height="12">', 'name':'Nikita Novodvorov ', 'club':'<img src=img/small/detva-small.png> Detva','age': 27,'rating': 276, 
                                                                        'points':8, 'goals':0, 'asists': 8,  },

        {'position': 'C','flag':'<img src="img/nat/slo.gif" height="12">', 'name':' Jernej Cej ', 'club':'<img src=img/small/detva-small.png> Detva','age': 25,'rating': 330, 
                                                                        'points':7, 'goals':2, 'asists': 5,  },

        {'position': 'C','flag':'<img src="img/nat/sva.gif" height="12">', 'name':' Norwin Gahlinger ', 'club':'<img src=img/small/detva-small.png> Detva','age': 26,'rating': 298, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/sva.gif" height="12">', 'name':' Hermann Hegelbach     ', 'club':'<img src=img/small/detva-small.png> Detva','age': 22,'rating': 273, 
                                                                        'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'LW','flag':'<img src="img/nat/nem.gif" height="12">', 'name':' Burkhard Juchems  ', 'club':'<img src=img/small/detva-small.png> Detva','age': 27,'rating': 384, 
                                                                        'points':10, 'goals':9, 'asists': 1,  },

        {'position': 'RD','flag':'<img src="img/nat/rus.gif" height="12">', 'name':'  Pavel Krasovskiy ', 'club':'<img src=img/small/detva-small.png> Detva','age': 24,'rating': 307, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },
        
        {'position': 'RD','flag':'<img src="img/nat/nor.gif" height="12">', 'name':' Leo Velo ', 'club':'<img src=img/small/detva-small.png> Detva','age': 27,'rating': 403, 
                                                                        'points':4, 'goals':0, 'asists': 4,  },

        {'position': 'LD','flag':'<img src="img/nat/uk.gif" height="12">', 'name':' Vladimir Penev ', 'club':'<img src=img/small/detva-small.png> Detva','age': 25,'rating': 310, 
                                                                        'points':4, 'goals':0, 'asists': 4,  },

        {'position': 'LD','flag':'<img src="img/nat/jap.gif" height="12">', 'name':'  Kuma Yamaguchiya <img src="img/nat/jap.gif" height="16" style="padding-bottom: 6px;">', 'club':'<img src=img/small/detva-small.png> Detva','age': 23,'rating': 277, 
                                                                        'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'LD','flag':'<img src="img/nat/uk.gif" height="12">', 'name':' Luka Belousov ', 'club':'<img src=img/small/detva-small.png> Detva','age': 25,'rating': 310, 
                                                                        'points':2, 'goals':0, 'asists': 2,  },

        



        // KOŠICE //
        {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Michal Šmidák ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 32,'rating': 351, 
                                                                        'points':8, 'goals':5, 'asists': 3,  },

        {'position': 'RW','flag':'<img src="img/nat/sve.gif" height="12">', 'name':' Henrik Eriksson ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 28,'rating': 363, 
                                                                        'points':8, 'goals':7, 'asists': 1,  },

         {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Erast Bochenek ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 34,'rating': 395, 
                                                                        'points':7, 'goals':4, 'asists': 3,  },

        {'position': 'RW','flag':'<img src="img/nat/aus.gif" height="12">', 'name':' Chris Graham ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 31,'rating': 341, 
                                                                        'points':2, 'goals':2, 'asists': 0,  },

        {'position': 'C','flag':'<img src="img/nat/aus.gif" height="12">', 'name':' Flynn Isaacs ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 29,'rating': 357, 
                                                                        'points':7, 'goals':3, 'asists': 4,  },

        {'position': 'C','flag':'<img src="img/nat/fra.gif" height="12">', 'name':' Boris Durand ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 30,'rating': 364, 
                                                                        'points':4, 'goals':1, 'asists': 3,  },

        {'position': 'C','flag':'<img src="img/nat/aus.gif" height="12">', 'name':' Marcus Kelly ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 26,'rating': 241, 
                                                                        'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'C','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Tomáš Kopecký ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 29,'rating': 322, 
                                                                        'points':6, 'goals':2, 'asists': 4,  },                                                                

        {'position': 'LW','flag':'<img src="img/nat/fra.gif" height="12">', 'name':' Michel Rossignol ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 32,'rating': 373, 
                                                                        'points':8, 'goals':7, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/lot.gif" height="12">', 'name':' Anatolijs Freibergs ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 26,'rating': 326, 
                                                                        'points':2, 'goals':2, 'asists': 0,  },

        {'position': 'LW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Bernardrín Galis ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 24,'rating': 271, 
                                                                        'points':2, 'goals':1, 'asists': 1,  },                                                                

        {'position': 'RD','flag':'<img src="img/nat/cz.gif" height="12">', 'name':'Andrej Mészaroš ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 34,'rating': 459, 
                                                                        'points':4, 'goals':1, 'asists': 3,  },

         {'position': 'RD','flag':'<img src="img/nat/fin.gif" height="12">', 'name':' Ville Tuusa ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 31,'rating': 407, 
                                                                        'points':8, 'goals':0, 'asists': 8,  },

         {'position': 'RD','flag':'<img src="img/nat/aus.gif" height="12">', 'name':'  Lucas Schofield ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 32,'rating': 319, 
                                                                        'points':3, 'goals':0, 'asists': 3,  },

        {'position': 'LD','flag':'<img src="img/nat/slo.gif" height="12">', 'name':'Filip Stegne ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 26,'rating': 330, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

         {'position': 'LD','flag':'<img src="img/nat/col.gif" height="12">', 'name':'Sebastián Lombana ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 27,'rating': 337, 
                                                                        'points':4, 'goals':0, 'asists': 4,  },

        



        // MICHALOVCE //
        {'position': 'RW','flag':'<img src="img/nat/isr.gif" height="12">', 'name':'  Muli Ziglin ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 26,'rating': 369,
                                                                         'points':11, 'goals':6, 'asists': 5,  },

        {'position': 'RW','flag':'<img src="img/nat/isr.gif" height="12">', 'name':' Thomas Peeters ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 26,'rating': 369,
                                                                         'points':4, 'goals':4, 'asists': 0,  },

        {'position': 'RW','flag':'<img src="img/nat/isr.gif" height="12">', 'name':'  Christopher Chapman    ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 28,'rating': 346, 
                                                                        'points':4, 'goals':2, 'asists': 2,  },

        {'position': 'RW','flag':'<img src="img/nat/sva.gif" height="12">', 'name':' Erwin Schümperli ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 26,'rating': 320, 
                                                                        'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'C','flag':'<img src="img/nat/isr.gif" height="12">', 'name':'  Yasha Pines ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 31,'rating': 387, 
                                                                        'points':8, 'goals':7, 'asists': 1,  },

        {'position': 'C','flag':'<img src="img/nat/nor.gif" height="12">', 'name':'  Ulrik Bryhn ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 31,'rating': 390, 
                                                                        'points':8, 'goals':4, 'asists': 4,  },

        {'position': 'C','flag':'<img src="img/nat/newz.gif" height="12">', 'name':'   Justin Bainbridge ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 29,'rating': 349, 
                                                                        'points':6, 'goals':4, 'asists': 2,  },

        {'position': 'LW','flag':'<img src="img/nat/usa.gif" height="12">', 'name':'  Pat Pacheco ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 30,'rating': 349, 
                                                                        'points':6, 'goals':5, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/por.gif" height="12">', 'name':'  Jacinto Pinheiro   ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 28,'rating': 367, 
                                                                        'points':4, 'goals':4, 'asists': 0,  },

        {'position': 'LW','flag':'<img src="img/nat/pl.gif" height="12">', 'name':'  Sebastian Kasprzak   ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 31,'rating': 381, 
                                                                        'points':7, 'goals':4, 'asists': 3,  },

        {'position': 'LW','flag':'<img src="img/nat/jap.gif" height="12">', 'name':'  Naomi Shiganori   ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 27,'rating': 343, 
                                                                        'points':5, 'goals':2, 'asists': 3,  },

        {'position': 'RD','flag':'<img src="img/nat/dan.gif" height="12">', 'name':'  Magnus Lauridsen ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 27,'rating': 368, 
                                                                        'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'RD','flag':'<img src="img/nat/rus.gif" height="12">', 'name':'  Bogdan Mushailov ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 31,'rating': 408, 
                                                                        'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'RD','flag':'<img src="img/nat/fin.gif" height="12">', 'name':'  Ilmari Grönfors ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 29,'rating': 338, 
                                                                        'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'LD','flag':'<img src="img/nat/lot.gif" height="12">', 'name':'  Jēkabs Balodis ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 27,'rating': 355, 
                                                                        'points':4, 'goals':0, 'asists': 4,  },

        {'position': 'LD','flag':'<img src="img/nat/biel.gif" height="12">', 'name':'  Taras Rybkin ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 24,'rating': 350, 
                                                                        'points':4, 'goals':0, 'asists': 4,  },

        {'position': 'LD','flag':'<img src="img/nat/nor.gif" height="12">', 'name':'  Ingolf Rustad ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 32,'rating': 368, 
                                                                        'points':9, 'goals':0, 'asists': 9,  },

        {'position': 'LD','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Branislav Šmik ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 28,'rating': 270, 
                                                                        'points':1, 'goals':1, 'asists': 0,  },

         

        



        // MIKULÁŠ //
        {'position': 'RW','flag':'<img src="img/nat/ir.gif" height="12">', 'name':' Cian Bunyan ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 33,'rating': 367, 
                                                                        'points':2, 'goals':1, 'asists': 1,  },

        {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Karol Pietrik ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 33,'rating': 348, 
                                                                        'points':4, 'goals':1, 'asists': 3,  },

        {'position': 'RW','flag':'<img src="img/nat/fra.gif" height="12">', 'name':' Christophe Fontaine     ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 33,'rating': 332, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'C','flag':'<img src="img/nat/sva.gif" height="12">', 'name':' Rino Vacheron ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 31,'rating': 367, 
                                                                        'points':3, 'goals':2, 'asists': 1,  },

        {'position': 'C','flag':'<img src="img/nat/sva.gif" height="12">', 'name':' Gion Botta ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 29,'rating': 311, 
                                                                        'points':3, 'goals':1, 'asists': 2,  },

        {'position': 'C','flag':'<img src="img/nat/hr.gif" height="12">', 'name':' Grga Foler ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age':  34,'rating': 337, 
                                                                        'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'LW','flag':'<img src="img/nat/lot.gif" height="12">', 'name':' Uģis Cālītis ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 33,'rating': 391, 
                                                                        'points':2, 'goals':1, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Jakub Burian ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 34,'rating': 331, 
                                                                        'points':2, 'goals':1, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/lot.gif" height="12">', 'name':' Krišjānis Videnieks ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 32,'rating': 333, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'RD','flag':'<img src="img/nat/fin.gif" height="12">', 'name':'  Eino Viippo ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 34,'rating': 363, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LD','flag':'<img src="img/nat/slo.gif" height="12">', 'name':'  Jaka Lajevec ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 33,'rating': 311, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LD','flag':'<img src="img/nat/sva.gif" height="12">', 'name':'  Raffaele Zahnd ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 29,'rating': 311, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LD','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Jaromil Žebrák ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 36,'rating': 320, 
                                                                        'points':2, 'goals':0, 'asists': 2,  },

        


        // NITRA //
        {'position': 'RW', 'flag':'<img src="img/nat/lot.gif" height="12">', 'name':' Leonards Lapsiņš ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 31,'rating': 468, 
                                                                        'points':9, 'goals':8, 'asists': 1, },

         {'position': 'RW', 'flag':'<img src="img/nat/uk.gif" height="12">', 'name':' Oleksiy Bulyga ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 31,'rating': 468, 
                                                                        'points':2, 'goals':2, 'asists': 0, },

         {'position': 'RW', 'flag':'<img src="img/nat/est.gif" height="12">', 'name':' Haljand Toom ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 33,'rating': 331, 
                                                                        'points':6, 'goals':3, 'asists': 3, },
        
         {'position': 'C', 'flag':'<img src="img/nat/fin.gif" height="12">', 'name':' Heikki Rantala', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 38,'rating': 274, 
                                                                        'points':2, 'goals':0, 'asists': 2, },

         {'position': 'C', 'flag':'<img src="img/nat/rus.gif" height="12">', 'name':' Almaz Legasov', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 30,'rating': 331, 
                                                                        'points':9, 'goals':1, 'asists': 8, },                                                               

         {'position': 'C', 'flag':'<img src="img/nat/domr.gif" height="12">', 'name':'  Cándido Barceló ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 28,'rating': 354, 
                                                                        'points':5, 'goals':0, 'asists':5, },

         {'position': 'C', 'flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Jindřich Sláma ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 30,'rating': 387, 
                                                                        'points':11, 'goals':1, 'asists': 10, },

         {'position': 'LW', 'flag':'<img src="img/nat/aus.gif" height="12">', 'name':'  Jack Morse ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 27,'rating': 344, 
                                                                        'points':3, 'goals':3, 'asists': 0, },

         {'position': 'LW', 'flag':'<img src="img/nat/slo.gif" height="12">', 'name':' Vasja Drole ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 26,'rating': 373, 
                                                                        'points':8, 'goals':6, 'asists': 2, },

         {'position': 'LW', 'flag':'<img src="img/nat/ukr.gif" height="12">', 'name':' Oleksiy Bulyga ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 27,'rating': 341, 
                                                                        'points':2, 'goals':2, 'asists': 0, },

          {'position': 'LW', 'flag':'<img src="img/nat/nem.gif" height="12">', 'name':' Werner Hagenstrom    ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 34,'rating': 441, 
                                                                        'points':7, 'goals':5, 'asists': 2, },

         {'position': 'RD', 'flag':'<img src="img/nat/rus.gif" height="12">', 'name':'  Anatoliy Chalmaev    ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 33,'rating': 413, 
                                                                        'points':4, 'goals':1, 'asists': 3, },

         {'position': 'RD', 'flag':'<img src="img/nat/can.gif" height="12">', 'name':'  Tommy Zinkan    ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 26,'rating': 293, 
                                                                        'points':2, 'goals':0, 'asists': 2, },  

         {'position': 'LD', 'flag':'<img src="img/nat/fra.gif" height="12">', 'name':' Jean Lamy ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 26,'rating': 336, 
                                                                        'points':5, 'goals':0, 'asists': 5, },  

          {'position': 'LD', 'flag':'<img src="img/nat/arg.gif" height="12">', 'name':' Iván Estrada ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 26,'rating': 313, 
                                                                        'points':1, 'goals':0, 'asists': 1, },  

          {'position': 'LD', 'flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Václav Strnad ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 23,'rating': 209, 
                                                                        'points':2, 'goals':0, 'asists': 2, },                                                               

        

        //{'position': 'LD' 'flag':'<img src="img/nat/ukr.gif" height="12">', 'name':' Yukhym Pidkuimukha <img src="img/nat/ukr.gif" height="16" style="padding-bottom: 6px;">', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 34,'rating': 498, 'points':0, 'goals':0, 'asists': 0, },


        // PIEŠŤANY //
        {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Kliment Geffert ', 'club':'<img src=img/small/piestany-small.png> Piešťany','age': 33,'rating': 463, 
                                                                        'points':5, 'goals':3, 'asists': 2,  },

        {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Branislav Kovalský ', 'club':'<img src=img/small/piestany-small.png> Piešťany','age': 27,'rating': 321, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'   Fábius Fekete ', 'club':'<img src=img/small/piestany-small.png> Piešťany','age': 24,'rating': 264, 
                                                                        'points':2, 'goals':2, 'asists': 0,  },

        {'position': 'C','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Dominik Vajda ', 'club':'<img src=img/small/piestany-small.png> Piešťany','age': 24,'rating': 303, 
                                                                        'points':3, 'goals':1, 'asists': 2,  },

        {'position': 'C','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Klaudius Pelich ', 'club':'<img src=img/small/piestany-small.png> Piešťany','age': 23,'rating': 308, 
                                                                        'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'C','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Erik Frankovský ', 'club':'<img src=img/small/piestany-small.png> Piešťany','age': 31,'rating': 380, 
                                                                        'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'LW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Štefan Papšo ', 'club':'<img src=img/small/piestany-small.png> Piešťany','age': 29,'rating': 456, 
                                                                        'points':4, 'goals':3, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Miroslav Bystriansky   ', 'club':'<img src=img/small/piestany-small.png> Piešťany','age': 24,'rating': 310, 
                                                                        'points':2, 'goals':2, 'asists': 0,  },

        {'position': 'RD','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Emil Kvasňovský ', 'club':'<img src=img/small/piestany-small.png> Piešťany','age': 29,'rating': 384, 
                                                                        'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'LD','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Zdeno Šipko ', 'club':'<img src=img/small/piestany-small.png> Piešťany','age': 27,'rating': 377, 
                                                                        'points':4, 'goals':1, 'asists': 3,  },

        {'position': 'LD','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Radim Pavlenka ', 'club':'<img src=img/small/piestany-small.png> Piešťany','age': 26,'rating': 304, 
                                                                        'points':0, 'goals':0, 'asists': 1,  },


        

        




        // POPRAD //
        {'position': 'RW','flag':'<img src="img/nat/biel.gif" height="12">', 'name':' Hvedar Olsa ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 28,'rating': 453, 
                                                                        'points':18, 'goals':13, 'asists': 5,  },

        {'position': 'RW','flag':'<img src="img/nat/uk.gif" height="12">', 'name':'  Elliot Turnbull ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 31,'rating': 375, 
                                                                        'points':14, 'goals':11, 'asists': 3,  },

        {'position': 'RW','flag':'<img src="img/nat/uk.gif" height="12">', 'name':' Martin Jones ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 29,'rating': 433, 
                                                                        'points':19, 'goals':13, 'asists': 6,  },

        {'position': 'RW','flag':'<img src="img/nat/uk.gif" height="12">', 'name':' Reggie Glover ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 29,'rating': 400, 
                                                                        'points':6, 'goals':5, 'asists': 1,  },                                                                                                                                

        {'position': 'C','flag':'<img src="img/nat/uk.gif" height="12">', 'name':'   Leroy Bell ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 33,'rating': 399, 
                                                                        'points':8, 'goals':1, 'asists': 7,  },

        {'position': 'C','flag':'<img src="img/nat/uk.gif" height="12">', 'name':'   Guy Knowles ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 32,'rating': 457, 
                                                                        'points':21, 'goals':3, 'asists': 18,  },  

        {'position': 'C','flag':'<img src="img/nat/uk.gif" height="12">', 'name':'    Connor Enock ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 29,'rating': 393, 
                                                                        'points':5, 'goals':0, 'asists': 5,  },                                                                

        {'position': 'LW','flag':'<img src="img/nat/uk.gif" height="12">', 'name':'  Francis Clark ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 32,'rating': 403, 
                                                                        'points':10, 'goals':7, 'asists': 3,  },

        {'position': 'LW','flag':'<img src="img/nat/uk.gif" height="12">', 'name':'  Brad Keane ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 28,'rating': 331, 
                                                                        'points':2, 'goals':1, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/uk.gif" height="12">', 'name':'  Darren Morris ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 30,'rating': 376, 
                                                                        'points':4, 'goals':4, 'asists': 0,  },                                                                        

        {'position': 'RD','flag':'<img src="img/nat/jap.gif" height="12">', 'name':' Ikku Koyanagi ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 28,'rating': 433, 
                                                                        'points':8, 'goals':6, 'asists': 2,  },

        {'position': 'RD','flag':'<img src="img/nat/uk.gif" height="12">', 'name':' Seth Wormull ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 29,'rating': 410, 
                                                                        'points':6, 'goals':0, 'asists': 6,  },                                                             

        {'position': 'RD','flag':'<img src="img/nat/uk.gif" height="12">', 'name':' Mark Harvey ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 29,'rating': 384, 
                                                                        'points':8, 'goals':0, 'asists': 8,  },

        {'position': 'RD','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Antonín Erben ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 29,'rating': 397, 
                                                                        'points':2, 'goals':1, 'asists': 1,  },

        {'position': 'LD','flag':'<img src="img/nat/uk.gif" height="12">', 'name':' Peter Gayle ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 31,'rating': 445, 
                                                                        'points':9, 'goals':1, 'asists': 8,  },   

        {'position': 'LD','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Chotimír Orlovský    ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 28,'rating': 399, 
                                                                        'points':4, 'goals':0, 'asists': 4,  },   
        




        // SKALICA //
        {'position': 'RW','flag':'<img src="img/nat/sva.gif" height="12">', 'name':'   Björn Renner  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 35,'rating': 388, 
                                                                            'points':5, 'goals':5, 'asists': 0,  },

        {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'   Michal Tumidalský  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 30,'rating': 391, 
                                                                            'points':5 , 'goals':2, 'asists': 3,  },

        {'position': 'C','flag':'<img src="img/nat/can.gif" height="12">', 'name':'  Derek Syed  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 33,'rating': 396, 
                                                                            'points':6, 'goals':2, 'asists': 4,  },

        {'position': 'C','flag':'<img src="img/nat/lot.gif" height="12">', 'name':'  Uldis Stārķis  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 33,'rating': 374, 
                                                                            'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'C','flag':'<img src="img/nat/cz.gif" height="12">', 'name':'   Soběslav Severa  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 32,'rating': 385, 
                                                                            'points':5, 'goals':2, 'asists': 3,  },

        {'position': 'LW','flag':'<img src="img/nat/can.gif" height="12">', 'name':' Charles-David Shugg  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 33,'rating': 396, 
                                                                            'points':3, 'goals':2, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/pol.gif" height="12">', 'name':' Kwiryn Niepoń  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 32,'rating': 399, 
                                                                            'points':6, 'goals':5, 'asists': 1,  },
   
        {'position': 'LW','flag':'<img src="img/nat/chil.gif" height="12">', 'name':'  Martín Zamorano  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 33,'rating': 378, 
                                                                            'points':4, 'goals':3, 'asists': 1,  },
 
        {'position': 'LW','flag':'<img src="img/nat/kaz.gif" height="12">', 'name':'   Erbol Abishev  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 33,'rating': 422, 
                                                                            'points':6, 'goals':1, 'asists': 5,  },

        {'position': 'RD','flag':'<img src="img/nat/fin.gif" height="12">', 'name':'   Nikolai Lampi  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 34,'rating': 379, 
                                                                            'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'LD','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'   Lubor Cibulka  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 34,'rating': 409, 
                                                                            'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'LD','flag':'<img src="img/nat/bel.gif" height="12">', 'name':'   Daan Maerschalack      ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 34,'rating': 372, 
                                                                            'points':2, 'goals':0, 'asists': 2,  },




         // SLOVAN //
         {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Tadeáš Kropuch ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 30,'rating': 397, 
                                                                        'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'C','flag':'<img src="img/nat/lot.gif" height="12">', 'name':' Jevgēņijs Dzeriņš ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 36,'rating': 306, 
                                                                        'points':2, 'goals':2, 'asists': 0,  },

        {'position': 'C','flag':'<img src="img/nat/isr.gif" height="12">', 'name':' Eshel Zilkha ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 29,'rating': 385, 
                                                                        'points':2, 'goals':1, 'asists': 1,  },                                                                

        {'position': 'C','flag':'<img src="img/nat/mex.gif" height="12">', 'name':' Mercurio Jauregui ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 33,'rating': 319, 
                                                                        'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'C','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Gerald Vranay ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 31,'rating': 344, 
                                                                        'points':2, 'goals':0, 'asists': 2,  },                                                                

        {'position': 'LW','flag':'<img src="img/nat/fin.gif" height="12">', 'name':'  Antero Myry ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 35,'rating': 396, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/domr.gif" height="12">', 'name':'   Juan José Gallardo ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 26,'rating': 286, 
                                                                        'points':2, 'goals':1, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/cz.gif" height="12">', 'name':'  Jan Skácel ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 31,'rating': 321, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'RD','flag':'<img src="img/nat/cz.gif" height="12">', 'name':'  Tomáš Polášek ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 32,'rating': 361, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'RD','flag':'<img src="img/nat/fra.gif" height="12">', 'name':'  Didier Marechal ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 31,'rating': 433, 
                                                                        'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LD','flag':'<img src="img/nat/fra.gif" height="12">', 'name':'   Daniel Couturier ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 33,'rating': 373, 
                                                                        'points':1, 'goals':1, 'asists': 0,  },                                                                




        
        // SPIŠSKÁ //
        {'position': 'RW','flag':'<img src="img/nat/rum.gif" height="12">', 'name':' Mihai Presecan ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 28,'rating': 350, 
                                                                         'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'RW','flag':'<img src="img/nat/biel.gif" height="12">', 'name':' Radzislau Krasavik ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 28,'rating': 365,
                                                                         'points':7, 'goals':7, 'asists': 0,  },
        
        {'position': 'RW','flag':'<img src="img/nat/mex.gif" height="12">', 'name':' Acislo Pulido ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 31,'rating': 432,
                                                                         'points':7, 'goals':7, 'asists': 0,  }, 

        {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Štefan Genči ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 19,'rating': 147,
                                                                         'points':1, 'goals':1, 'asists': 0,  }, 

        {'position': 'RW','flag':'<img src="img/nat/mad.gif" height="12">', 'name':' Fülöp Bernáth ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 30,'rating': 397,
                                                                         'points':5, 'goals':5, 'asists': 0,  },                                                                                                                               

       {'position': 'C','flag':'<img src="img/nat/biel.gif" height="12">', 'name':' Leanid Fatsejeu ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 33,'rating': 352, 
                                                                         'points':11, 'goals':0, 'asists': 11,  },

        {'position': 'C','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Fridrich Černošek ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 19,'rating': 149, 
                                                                         'points':1, 'goals':0, 'asists': 1,  },

       {'position': 'C','flag':'<img src="img/nat/nem.gif" height="12">', 'name':' Roland Pfeifer ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 33,'rating': 341, 
                                                                         'points':6, 'goals':0, 'asists': 6,  },

        {'position': 'C','flag':'<img src="img/nat/mex.gif" height="12">', 'name':' Tiburcio Zúniga ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 29,'rating': 368, 
                                                                         'points':11, 'goals':0, 'asists': 11,  },

       {'position': 'C','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Gerhard Chovanec  ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 25,'rating': 306, 
                                                                         'points':2, 'goals':0, 'asists': 2,  },

       {'position': 'LW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Ladislav Žember ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 32,'rating': 391, 
                                                                         'points':4, 'goals':2, 'asists': 2,  },

       {'position': 'LW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Ján Galis ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 30,'rating': 416, 
                                                                         'points':10, 'goals':9, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Karol Hrnčiarik ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 27,'rating': 358, 
                                                                         'points':4, 'goals':3, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/hol.gif" height="12">', 'name':' Morris Bouckaert ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 28,'rating': 337, 
                                                                         'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'RD','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Tobiáš Laubert ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 24,'rating': 336, 
                                                                         'points':3, 'goals':1, 'asists': 2,  },
        
        {'position': 'RD','flag':'<img src="img/nat/rak.gif" height="12">', 'name':'  Nils Neumayr ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 30,'rating': 376, 
                                                                         'points':3, 'goals':1, 'asists': 2,  },

        {'position': 'RD','flag':'<img src="img/nat/lot.gif" height="12">', 'name':'  Hermanis Juškāns   ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 32,'rating': 419, 
                                                                         'points':5, 'goals':0, 'asists': 5,  },

        {'position': 'LD','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  František Žebrák ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 32,'rating': 374, 
                                                                         'points':1, 'goals':0, 'asists': 1,  },

     

        
        // ZVOLEN /
        {'position': 'RW','flag':'<img src="img/nat/sva.gif" height="12">', 'name':' Felix Baumgartner ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 29,'rating': 352, 
                                                                         'points':2, 'goals':1, 'asists': 1,},

        {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Čestmír Babiak ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 30,'rating': 353, 
                                                                         'points':7, 'goals':5, 'asists': 2,},

        {'position': 'C','flag':'<img src="img/nat/arg.gif" height="12">', 'name':'  Silvio Diamante ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 33,'rating': 433,  
                                                                        'points':4, 'goals':1, 'asists': 3,},

        {'position': 'C','flag':'<img src="img/nat/rak.gif" height="12">', 'name':' Heinz Haderer', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 34,'rating': 379,  
                                                                        'points':6, 'goals':5, 'asists': 1,},

        {'position': 'C','flag':'<img src="img/nat/can.gif" height="12">', 'name':'  Andrew Hicks ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 30,'rating': 359,  
                                                                        'points':5, 'goals':0, 'asists': 5,  },

        {'position': 'LW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Richard Klačan ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 31,'rating': 360,  
                                                                        'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'LW','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Jiří Kalous ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 31,'rating': 361,  
                                                                        'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'RD','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Jan Vrána ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 30,'rating':332,  
                                                                        'points':1, 'goals':0, 'asists': 1,  },
        
        {'position': 'LD','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Martin Klimeš ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 32,'rating':362,  
                                                                        'points':3, 'goals':0, 'asists': 3,  },

        



       
        // ŽILINA //
        {'position': 'RW','flag':'<img src="img/nat/uk.gif" height="12">', 'name':' Thomas Murray ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 32,'rating': 404, 
                                                                        'points':8, 'goals':3, 'asists': 5, },

        {'position': 'RW','flag':'<img src="img/nat/rus.gif" height="12">', 'name':'  Bronislav Drashusov ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 33,'rating': 385, 
                                                                        'points':8, 'goals':7, 'asists': 1, },

        {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Ján Hodál ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 33,'rating': 329, 
                                                                        'points':2, 'goals':1, 'asists': 1, },

        {'position': 'C','flag':'<img src="img/nat/mad.gif" height="12">', 'name':' Tamás Roth ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 25,'rating': 312, 
                                                                        'points':6, 'goals':3, 'asists': 3, },

        {'position': 'C','flag':'<img src="img/nat/can.gif" height="12">', 'name':' Austin Carty ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 34,'rating': 364, 
                                                                        'points':7, 'goals':0, 'asists': 7, },

        {'position': 'C','flag':'<img src="img/nat/ir.gif" height="12">', 'name':' Sean Whiting', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 33,'rating': 308, 
                                                                        'points':8, 'goals':0, 'asists': 8, },

        {'position': 'LW','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Václav Bečvář ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 34,'rating': 386, 
                                                                        'points':4, 'goals':3, 'asists': 1, },

        {'position': 'LW','flag':'<img src="img/nat/biel.gif" height="12">', 'name':'  Siarhey Zgonik ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 33,'rating': 406, 
                                                                        'points':9, 'goals':8, 'asists': 1, },

        {'position': 'LW','flag':'<img src="img/nat/nem.gif" height="12">', 'name':'  Gustav Glaser ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 34,'rating': 305, 
                                                                        'points':5, 'goals':5, 'asists': 0, },

        {'position': 'LW','flag':'<img src="img/nat/sve.gif" height="12">', 'name':'  Altin Svärd ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 32,'rating': 359, 
                                                                        'points':4, 'goals':3, 'asists': 1, },

        {'position': 'RD','flag':'<img src="img/nat/nem.gif" height="12">', 'name':' H-D. Westerwalbesloh ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 27,'rating': 320, 
                                                                        'points':5, 'goals':0, 'asists': 5, },

        {'position': 'RD','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' František Kružliak ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 33,'rating': 399, 
                                                                        'points':1, 'goals':1, 'asists': 0, },

        {'position': 'LD','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Tomáš Dobrovolný ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 33,'rating': 388, 
                                                                        'points':3, 'goals':0, 'asists': 3, },

        {'position': 'LD','flag':'<img src="img/nat/fin.gif" height="12">', 'name':' Joni Schroderus ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 27,'rating': 276, 
                                                                        'points':4, 'goals':0, 'asists': 4, },

        
        
    
 
    ];

    window.onload = () => {
        loadTableData(personData);
    };

 

    function loadTableData(personData) {
        const tableBody = document.getElementById('tableData');
        let dataHtml = '';

        for(let person of personData){
            dataHtml +=  `<tr>
                            <td class="meno-hraca" style="font-weight: bold; padding: 2px; text-align: center;">${person.position}</td>
                            <td class="meno-hraca" style="font-weight: bold; padding-left: 3px; padding-bottom:2.5px;">${person.flag}</td>
                            <td class="meno-hraca" style="font-weight: bold; padding-left: 3px;">${person.name}</td>
                            <td class="meno-klubu" style="font-size: 14px; padding-top: 2px; padding-bottom: 2px;">${person.club}</td>
                            <td style="text-align: center; color: black;">${person.age}</td>
                            <td style="text-align: center; color: black; font-weight: bold;">${person.rating}</td>
                            <td style="font-weight: bold; text-align: center;">${person.points}</td>
                            <td style="text-align: center;">${person.goals}</td>
                            <td style="text-align: center;">${person.asists}</td>
                            
                      </tr>`

        }
       
        tableBody.innerHTML = dataHtml;
        
    }

  

   function sortColumn(columnName){
        const dataType = typeof personData[0][columnName];
        sortDirection = !sortDirection;

        switch(dataType) {
            case 'number':
            sortNumberColumn(sortDirection, columnName);
            break;
        }
        
        loadTableData(personData);
    }

    function sortNumberColumn(sort, columnName){
        personData = personData.sort((p1, p2) => {
            return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
        });
    }


