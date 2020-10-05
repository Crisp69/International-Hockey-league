let sortDirection = false;
let personData = [
        
        // KOSICE //
         {
            'position': '1.',
            'logo': '<img src="img/logo/kosice.png" height="20">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=9011" style="color: black;">Košice</a>', 
            'matches':0, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':0, 
            'score':0, 
            'diffscore': 0,  
            'points':0, 
         },

         // SLOVAN //
         {
            'position': '2.',
            'logo': '<img src="img/logo/slovan.png" height="20">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=37887" style="color: black;">Slovan Bratislava</a>', 
            'matches':0, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':0, 
            'score':0, 
            'diffscore': 0,  
            'points':0, 
         }, 

         // BYSTRICA //
         {
            'position': '3.',
            'logo': '<img src="img/logo/bystrica.png" height="24">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=28026" style="color: black;">Banská Bystrica</a>', 
            'matches':0, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':0, 
            'score':0, 
            'diffscore': 0,  
            'points':0, 
         }, 

         // NITRA //
         {
            'position': '4.',
            'logo': '<img src="img/logo/nitra.png" height="20">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=58877" style="color: black;">Nitra</a>', 
            'matches':0, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':0, 
            'score':0, 
            'diffscore': 0,
            'points':0,   
         }, 

         // POPRAD //
         {
            'position': '5.',
            'logo': '<img src="img/logo/poprad.png" height="23">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=7347" style="color: black;">Poprad</a>', 
            'matches':0, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':0, 
            'score':0, 
            'diffscore': 0,  
            'points':0, 
         }, 

         // DETVA //
         {
            'position': '6.',
            'logo': '<img src="img/logo/detva.png" height="20">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=58552" style="color: black;">Detva</a>', 
            'matches':0, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':0, 
            'score':0, 
            'diffscore': 0, 
            'points':0,  
         }, 

         // MIKULAS //
         {
            'position': '7.',
            'logo': '<img src="img/logo/mikulas.png" height="18">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=23979" style="color: black;">Liptovský Mikuláš</a>', 
            'matches':0, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':0, 
            'score':0, 
            'diffscore': 0, 
            'points':0,  
         }, 

          // SKALICA //
          {
            'position': '8.',
            'logo': '<img src="img/logo/skalica.png" height="20">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=2991" style="color: black;">Skalica</a>', 
            'matches':0, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':0, 
            'score':0, 
            'diffscore': 0,  
            'points':0, 
         }, 

         // ZILINA //
          {
            'position': '9.',
            'logo': '<img src="img/logo/zilina.png" height="20">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=47695" style="color: black;">Žilina</a>', 
            'matches':0, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':0, 
            'score':0, 
            'diffscore': 0, 
            'points':0,  
         }, 

         // PRAHA //
          {
            'position': '10.',
            'logo': '<img src="img/logo/praha.png" height="17">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=9698" style="color: black;">Sparta Praha</a>', 
            'matches':0, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':0,  
            'score':0, 
            'diffscore': 0,
            'points':0,  
         }, 

         // Mostečtí lvi //
          {
            'position': '11.',
            'logo': '<img src="img/logo/lvi.png" height="20">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=35553" style="color: black;">Mostečtí lvi</a>', 
            'matches':0, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':0,
            'score':0, 
            'diffscore': 0,
            'points':0,  
         }, 

    
 
    ];

    window.onload = () => {
        loadTableData(personData);
    };

 

    function loadTableData(personData) {
        const tableBody = document.getElementById('tableData');
        let dataHtml = '';

        for(let person of personData){
            dataHtml +=  `<tr>
                            <td class="meno-hraca" style="padding: 4px; text-align: center;">${person.position}</td>
                            <td class="meno-hraca" style="padding: 3px; text-align: center;">${person.logo}</td>
                            <td class="meno-hraca" style=" width:180px; padding-left: 10px; padding-bottom:2.5px;">${person.club}</td>
                            <td class="meno-hraca">${person.matches}</td>
                            <td class="meno-klubu" style="padding-top: 2px; padding-bottom: 2px;">${person.win}</td>
                            <td style="text-align: center; padding: 5px;">${person.winPP}</td>
                            <td style="text-align: center;">${person.losePP}</td>
                            <td style="text-align: center;">${person.lose}</td>
                            <td style="text-align: center;">${person.score}</td>
                            <td style="text-align: center;">${person.diffscore}</td>
                            <td style="text-align: center;">${person.points}</td>
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


