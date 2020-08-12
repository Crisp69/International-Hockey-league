let sortDirection = false;
let personData = [
        
        // BARDEJOV //
         {'position': 'RW','flag':'<img src="img/nat/bra.gif" height="12">', 'name':' Giovani Teles ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 29,'rating': 429, 'points':2, 'goals':0, 'asists': 2,  }, 

         {'position': 'RW','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Jakub Bouček ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 30,'rating': 427, 'points':2, 'goals':2, 'asists': 0,  },

         {'position': 'RW','flag':'<img src="img/nat/mad.gif" height="12">', 'name':'  Alajos Bocskai ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 35,'rating': 388, 'points':2, 'goals':2, 'asists': 0,  }, 

         {'position': 'C','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Filip Kaštyl ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 31,'rating': 410, 'points':2, 'goals':0, 'asists': 2,  },

         {'position': 'C','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Dzianis Miadzvedz ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 34,'rating': 347, 'points':2, 'goals':0, 'asists': 2,  }, 

         {'position': 'C','flag':'<img src="img/nat/biel.gif" height="12">', 'name':' Ján Maras ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 31,'rating': 424, 'points':2, 'goals':0, 'asists': 2,  },

         {'position': 'LW','flag':'<img src="img/nat/bel.gif" height="12">', 'name':' Siebe Hondshoven   ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 25,'rating': 304, 'points':3, 'goals':2, 'asists': 1,  },

         {'position': 'LW','flag':'<img src="img/nat/ir.gif" height="12">', 'name':' Robert Henry  ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 30,'rating': 457, 'points':2, 'goals':1, 'asists': 1,  },  

         {'position': 'LD','flag':'<img src="img/nat/hr.gif" height="12">', 'name':'Fabijan Drempetić  ', 'club':'<img src=img/small/bardejov-small.png> Bardejov','age': 31,'rating': 425, 'points':1, 'goals':0, 'asists': 1,  },  




        // BYSTRICA //
        {'position': 'RW','flag':'<img src="img/nat/nem.gif" height="12">', 'name':'  Jörg Münzner ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 35,'rating': 384, 'points':2, 'goals':0, 'asists': 2,  },
        
        {'position': 'RW','flag':'<img src="img/nat/sve.gif" height="12">', 'name':'  William Bertilsson ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 33,'rating': 376, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'RW','flag':'<img src="img/nat/fra.gif" height="12">', 'name':'  Jérémy Chretien ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 29,'rating': 308, 'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'C','flag':'<img src="img/nat/sva.gif" height="12">', 'name':'  Fritz Stahel ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 29,'rating': 354, 'points':4, 'goals':0, 'asists': 4,  },

        {'position': 'C','flag':'<img src="img/nat/cz.gif" height="12">', 'name':'  Jan Šindelář ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 33,'rating': 373, 'points':2, 'goals':1, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/mad.gif" height="12">', 'name':'  Miklós Lukács ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 26,'rating': 324, 'points':2, 'goals':2, 'asists': 0,  },

        {'position': 'LW','flag':'<img src="img/nat/sva.gif" height="12">', 'name':' Reto Moggi ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 28,'rating': 296, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/rus.gif" height="12">', 'name':' Maksim Zheleznov ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 30,'rating': 330, 'points':2, 'goals':2, 'asists': 0,  },
        
        {'position': 'LW','flag':'<img src="img/nat/slo.gif" height="12">', 'name':' Jure Murič ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 33,'rating': 318, 'points':2, 'goals':1, 'asists': 1,  },
     
        {'position': 'RD','flag':'<img src="img/nat/fin.gif" height="12">', 'name':'  Niklas Laisi ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 35,'rating': 382, 'points':1, 'goals':0, 'asists': 1,  },
         
        {'position': 'LD','flag':'<img src="img/nat/lot.gif" height="12">', 'name':' Lauris Lācplēsējs ', 'club':'<img src=img/small/bb-small.png> Bystrica','age': 33,'rating': 354, 'points':1, 'goals':0, 'asists': 1,  },



        
        // DETVA //
        {'position': 'RW','flag':'<img src="img/nat/rus.gif" height="12">', 'name':'Aaron Hagerty ', 'club':'<img src=img/small/detva-small.png> Detva','age': 22,'rating': 400, 'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Egon Sopík ', 'club':'<img src=img/small/detva-small.png> Detva','age': 26,'rating': 322, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'C','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Jakub Frydrych ', 'club':'<img src=img/small/detva-small.png> Detva','age': 25,'rating': 302, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'C','flag':'<img src="img/nat/newz.gif" height="12">', 'name':'Nikita Novodvorov ', 'club':'<img src=img/small/detva-small.png> Detva','age': 27,'rating': 276, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/chile.gif" height="12">', 'name':' Adrián Ortiz ', 'club':'<img src=img/small/detva-small.png> Detva','age': 25,'rating': 325, 'points':1, 'goals':1, 'asists': 0,  },
        
        {'position': 'LD','flag':'<img src="img/nat/bul.gif" height="12">', 'name':' Vladimir Penev ', 'club':'<img src=img/small/detva-small.png> Detva','age': 26,'rating': 326, 'points':1, 'goals':0, 'asists': 1,  },

        



        // KOŠICE //
        {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Michal Šmidák ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 32,'rating': 351, 'points':2, 'goals':1, 'asists': 1,  },

         {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Erast Bochenek ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 34,'rating': 395, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'C','flag':'<img src="img/nat/aus.gif" height="12">', 'name':' Flynn Isaacs ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 29,'rating': 357, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'C','flag':'<img src="img/nat/fra.gif" height="12">', 'name':' Boris Durand ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 30,'rating': 364, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/fra.gif" height="12">', 'name':' Michel Rossignol ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 32,'rating': 373, 'points':1, 'goals':1, 'asists': 0,  },

        
        {'position': 'RD','flag':'<img src="img/nat/cz.gif" height="12">', 'name':'Andrej Mészaroš ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 34,'rating': 459, 'points':2, 'goals':0, 'asists': 2,  },

         {'position': 'RD','flag':'<img src="img/nat/fin.gif" height="12">', 'name':' Ville Tuusa ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 31,'rating': 407, 'points':1, 'goals':0, 'asists': 1,  },


        {'position': 'LD','flag':'<img src="img/nat/slo.gif" height="12">', 'name':'Filip Stegne ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 26,'rating': 330, 'points':1, 'goals':0, 'asists': 1,  },

         {'position': 'LD','flag':'<img src="img/nat/col.gif" height="12">', 'name':'Sebastián Lombana ', 'club':'<img src=img/small/kosice-small.png> Košice','age': 27,'rating': 337, 'points':1, 'goals':0, 'asists': 1,  },

        



        // MICHALOVCE //
        {'position': 'RW','flag':'<img src="img/nat/isr.gif" height="12">', 'name':'  Muli Ziglin ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 26,'rating': 369, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'RW','flag':'<img src="img/nat/isr.gif" height="12">', 'name':'  Christopher Chapman    ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 28,'rating': 346, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'RW','flag':'<img src="img/nat/sva.gif" height="12">', 'name':' Erwin Schümperli ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 26,'rating': 320, 'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'C','flag':'<img src="img/nat/isr.gif" height="12">', 'name':'  Yasha Pines ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 31,'rating': 387, 'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'LW','flag':'<img src="img/nat/usa.gif" height="12">', 'name':'  Pat Pacheco ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 30,'rating': 349, 'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'LW','flag':'<img src="img/nat/por.gif" height="12">', 'name':'  Jacinto Pinheiro   ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 28,'rating': 367, 'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'RD','flag':'<img src="img/nat/dan.gif" height="12">', 'name':'  Magnus Lauridsen ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 27,'rating': 368, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LD','flag':'<img src="img/nat/lot.gif" height="12">', 'name':'  Jēkabs Balodis ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 27,'rating': 355, 'points':1, 'goals':0, 'asists': 1,  },

         {'position': 'LD','flag':'<img src="img/nat/lot.gif" height="12">', 'name':'  Jēkabs Balodis ', 'club':'<img src=img/small/michalovce-small.png> Michalovce','age': 32,'rating': 368, 'points':1, 'goals':0, 'asists': 1,  },

        



        // MIKULÁŠ //
        {'position': 'RW','flag':'<img src="img/nat/ir.gif" height="12">', 'name':' Cian Bunyan ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 33,'rating': 367, 'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'C','flag':'<img src="img/nat/sva.gif" height="12">', 'name':' Rino Vacheron ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 31,'rating': 367, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'C','flag':'<img src="img/nat/sva.gif" height="12">', 'name':' Gion Botta ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 29,'rating': 311, 'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'LD','flag':'<img src="img/nat/slo.gif" height="12">', 'name':'  Jaka Lajevec ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 33,'rating': 311, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LD','flag':'<img src="img/nat/sva.gif" height="12">', 'name':'  Raffaele Zahnd ', 'club':'<img src=img/small/mikulas-small.png> Mikuláš','age': 29,'rating': 311, 'points':1, 'goals':0, 'asists': 1,  },

        


        // NITRA //
        {'position': 'RW', 'flag':'<img src="img/nat/lot.gif" height="12">', 'name':' Leonards Lapsiņš ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 31,'rating': 468, 'points':2, 'goals':2, 'asists': 0, },

         {'position': 'RW', 'flag':'<img src="img/nat/est.gif" height="12">', 'name':' Haljand Toom ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 33,'rating': 331, 'points':1, 'goals':1, 'asists': 0, },
        
         {'position': 'C', 'flag':'<img src="img/nat/fin.gif" height="12">', 'name':' Heikki Rantala', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 38,'rating': 274, 'points':2, 'goals':0, 'asists': 2, },

         {'position': 'C', 'flag':'<img src="img/nat/domr.gif" height="12">', 'name':'  Cándido Barceló ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 28,'rating': 354, 'points':1, 'goals':0, 'asists': 1, },

         {'position': 'C', 'flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Jindřich Sláma ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 30,'rating': 387, 'points':1, 'goals':0, 'asists': 1, },

         {'position': 'LW', 'flag':'<img src="img/nat/aus.gif" height="12">', 'name':'  Jack Morse ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 27,'rating': 344, 'points':1, 'goals':1, 'asists': 0, },

         {'position': 'LW', 'flag':'<img src="img/nat/slo.gif" height="12">', 'name':' Vasja Drole ', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 26,'rating': 373, 'points':1, 'goals':0, 'asists': 1, },

        

        //{'position': 'LD' 'flag':'<img src="img/nat/ukr.gif" height="12">', 'name':' Yukhym Pidkuimukha <img src="img/nat/ukr.gif" height="16" style="padding-bottom: 6px;">', 'club':'<img src="img/small/nitra-small.png"> Nitra','age': 34,'rating': 498, 'points':0, 'goals':0, 'asists': 0, },


        // POPRAD //
        {'position': 'RW','flag':'<img src="img/nat/biel.gif" height="12">', 'name':' Hvedar Olsa ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 28,'rating': 453, 'points':3, 'goals':3, 'asists': 0,  },

        {'position': 'C','flag':'<img src="img/nat/uk.gif" height="12">', 'name':'   Leroy Bell ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 33,'rating': 399, 'points':3, 'goals':1, 'asists': 2,  },

        {'position': 'LW','flag':'<img src="img/nat/uk.gif" height="12">', 'name':'  Francis Clark ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 32,'rating': 403, 'points':2, 'goals':1, 'asists': 1,  },

        {'position': 'RD','flag':'<img src="img/nat/jap.gif" height="12">', 'name':' Ikku Koyanagi ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 28,'rating': 433, 'points':2, 'goals':1, 'asists': 1,  },

        {'position': 'RD','flag':'<img src="img/nat/uk.gif" height="12">', 'name':' Seth Wormull ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 29,'rating': 410, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'RD','flag':'<img src="img/nat/uk.gif" height="12">', 'name':' Mark Harvey ', 'club':'<img src=img/small/poprad-small.png> Poprad','age': 29,'rating': 384, 'points':2, 'goals':0, 'asists': 2,  },

        




        // SKALICA //
        {'position': 'RW','flag':'<img src="img/nat/sva.gif" height="12">', 'name':'   Björn Renner  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 35,'rating': 388, 'points':2, 'goals':2, 'asists': 0,  },

        {'position': 'C','flag':'<img src="img/nat/can.gif" height="12">', 'name':'  Derek Syed  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 33,'rating': 396, 'points':3, 'goals':1, 'asists': 2,  },

        {'position': 'C','flag':'<img src="img/nat/lot.gif" height="12">', 'name':'  Uldis Stārķis  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 33,'rating': 374, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/can.gif" height="12">', 'name':' Charles-David Shugg  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 33,'rating': 396, 'points':1, 'goals':1, 'asists': 0,  },
   
        {'position': 'LW','flag':'<img src="img/nat/chil.gif" height="12">', 'name':'  Martín Zamorano  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 33,'rating': 378, 'points':2, 'goals':1, 'asists': 1,  },
 
        {'position': 'LW','flag':'<img src="img/nat/kaz.gif" height="12">', 'name':'   Erbol Abishev  ', 'club':'<img src=img/small/skalica-small.png> Skalica','age': 33,'rating': 422, 'points':2, 'goals':0, 'asists': 2,  },




         // SLOVAN //
        {'position': 'C','flag':'<img src="img/nat/lot.gif" height="12">', 'name':' Jevgēņijs Dzeriņš ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 36,'rating': 306, 'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'C','flag':'<img src="img/nat/mex.gif" height="12">', 'name':' Mercurio Jauregui ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 33,'rating': 319, 'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'LW','flag':'<img src="img/nat/fin.gif" height="12">', 'name':'  Antero Myry ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 35,'rating': 396, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/domr.gif" height="12">', 'name':'   Juan José Gallardo ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 26,'rating': 286, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'RD','flag':'<img src="img/nat/cz.gif" height="12">', 'name':'  Tomáš Polášek ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 32,'rating': 361, 'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'RD','flag':'<img src="img/nat/fra.gif" height="12">', 'name':'  Didier Marechal ', 'club':'<img src=img/small/slovan-small.png> Slovan','age': 31,'rating': 433, 'points':1, 'goals':0, 'asists': 1,  },



        
        // SPIŠSKÁ //
        {'position': 'C','flag':'<img src="img/nat/biel.gif" height="12">', 'name':' Radzislau Krasavik ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 28,'rating': 365, 'points':2, 'goals':2, 'asists': 0,  },

       {'position': 'C','flag':'<img src="img/nat/biel.gif" height="12">', 'name':' Leanid Fatsejeu ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 33,'rating': 352, 'points':1, 'goals':0, 'asists': 1,  },

       {'position': 'C','flag':'<img src="img/nat/nem.gif" height="12">', 'name':' Roland Pfeifer ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 33,'rating': 341, 'points':2, 'goals':0, 'asists': 2,  },

        {'position': 'C','flag':'<img src="img/nat/mex.gif" height="12">', 'name':' Tiburcio Zúniga ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 29,'rating': 368, 'points':1, 'goals':0, 'asists': 1,  },

       {'position': 'LW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Ladislav Žember ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 32,'rating': 391, 'points':1, 'goals':1, 'asists': 0,  },

       {'position': 'RD','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Ladislav Žember ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 30,'rating': 395, 'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'RD','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Tobiáš Laubert ', 'club':'<img src=img/small/snv-small.png> Spišská','age': 24,'rating': 336, 'points':1, 'goals':1, 'asists': 0,  },
               
     

        
        // ZVOLEN /

        {'position': 'RW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':'  Čestmír Babiak ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 30,'rating': 353,  'points':1, 'goals':1, 'asists': 0,},

        {'position': 'C','flag':'<img src="img/nat/arg.gif" height="12">', 'name':'  Silvio Diamante ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 33,'rating': 433,  'points':1, 'goals':0, 'asists': 1,},

        {'position': 'C','flag':'<img src="img/nat/rak.gif" height="12">', 'name':' Heinz Haderer', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 34,'rating': 379,  'points':1, 'goals':1, 'asists': 0,},

        {'position': 'C','flag':'<img src="img/nat/can.gif" height="12">', 'name':'  Andrew Hicks ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 30,'rating': 359,  'points':1, 'goals':0, 'asists': 1,  },

        {'position': 'LW','flag':'<img src="img/nat/svk.gif" height="12">', 'name':' Richard Klačan ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 31,'rating': 360,  'points':1, 'goals':1, 'asists': 0,  },

        {'position': 'RD','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Jan Vrána ', 'club':'<img src=img/small/zvolen-small.png> Zvolen','age': 30,'rating':332,  'points':1, 'goals':0, 'asists': 1,  },

        



       
        // ŽILINA //
        {'position': 'RW','flag':'<img src="img/nat/uk.gif" height="12">', 'name':' Thomas Murray ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 32,'rating': 404, 'points':2, 'goals':0, 'asists': 2, },

        {'position': 'RW','flag':'<img src="img/nat/rus.gif" height="12">', 'name':'  Bronislav Drashusov ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 33,'rating': 385, 'points':1, 'goals':0, 'asists': 1, },

        {'position': 'C','flag':'<img src="img/nat/mad.gif" height="12">', 'name':' Tamás Roth ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 25,'rating': 312, 'points':2, 'goals':2, 'asists': 0, },

        {'position': 'C','flag':'<img src="img/nat/can.gif" height="12">', 'name':' Austin Carty ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 34,'rating': 364, 'points':2, 'goals':0, 'asists': 2, },

        {'position': 'LW','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Václav Bečvář ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 34,'rating': 386, 'points':1, 'goals':1, 'asists': 0, },

        {'position': 'LW','flag':'<img src="img/nat/biel.gif" height="12">', 'name':'  Siarhey Zgonik ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 33,'rating': 406, 'points':2, 'goals':2, 'asists': 0, },

        {'position': 'RD','flag':'<img src="img/nat/nem.gif" height="12">', 'name':' H-D. Westerwalbesloh ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 27,'rating': 320, 'points':2, 'goals':0, 'asists': 2, },

        {'position': 'LD','flag':'<img src="img/nat/cz.gif" height="12">', 'name':' Tomáš Dobrovolný ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 33,'rating': 388, 'points':1, 'goals':0, 'asists': 1, },

        {'position': 'LD','flag':'<img src="img/nat/fin.gif" height="12">', 'name':' Joni Schroderus ', 'club':'<img src=img/small/zilina-small.png> Žilina','age': 27,'rating': 276, 'points':1, 'goals':0, 'asists': 1, },

        
        
    
 
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

