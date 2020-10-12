let sortDirection = false;
let personData = [
        
        // KOSICE //
         {
            'position': '2.',
            'logo': '<img src="img/logo/kosice.png" height="20">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=9011" style="color: black;">Košice</a>', 
            'matches':1, 
            'win':1,
            'winPP': 0,
            'losePP': 0, 
            'lose':0, 
            'score':"5 : 1", 
            'diffscore': 4,  
            'points':3, 
         },

         // SLOVAN //
         {
            'position': '10.',
            'logo': '<img src="img/logo/slovan.png" height="20">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=37887" style="color: black;">Slovan Bratislava</a>', 
            'matches':1, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':1, 
            'score':"1 : 3", 
            'diffscore': -2,  
            'points':0, 
         }, 

         // BYSTRICA //
         {
            'position': '3.',
            'logo': '<img src="img/logo/bystrica.png" height="24">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=28026" style="color: black;">Banská Bystrica</a>', 
            'matches':1, 
            'win':1,
            'winPP': 0,
            'losePP': 0, 
            'lose':0, 
            'score':"3 : 1", 
            'diffscore': 2,  
            'points':3, 
         }, 

         // NITRA //
         {
            'position': '5.',
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
            'position': '1.',
            'logo': '<img src="img/logo/poprad.png" height="23">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=7347" style="color: black;">Poprad</a>', 
            'matches':1, 
            'win':1,
            'winPP': 0,
            'losePP': 0, 
            'lose':0, 
            'score':"6 : 1", 
            'diffscore': 5,  
            'points':3, 
         }, 

         // DETVA //
         {
            'position': '9.',
            'logo': '<img src="img/logo/detva.png" height="20">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=58552" style="color: black;">Detva</a>', 
            'matches':1, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':1, 
            'score':"3 : 4", 
            'diffscore': -1, 
            'points':0,  
         }, 

         // MIKULAS //
         {
            'position': '5.',
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
            'position': '11.',
            'logo': '<img src="img/logo/skalica.png" height="20">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=2991" style="color: black;">Skalica</a>', 
            'matches':1, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':1, 
            'score':"1 : 5", 
            'diffscore': -4,  
            'points':0, 
         }, 

         // ZILINA //
          {
            'position': '5.',
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
            'position': '5.',
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
            'position': '4.',
            'logo': '<img src="img/logo/lvi.png" height="20">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=35553" style="color: black;">Mostečtí lvi</a>', 
            'matches':1, 
            'win':1,
            'winPP': 0,
            'losePP': 0, 
            'lose':0,
            'score':"4 : 3", 
            'diffscore': 1,
            'points':3,  
         }, 

          // ZNOJMO //
          {
            'position': '12.',
            'logo': '<img src="img/logo/znojmo.png" height="15">',
            'club':'<a href="https://www.hockeyarena.net/sk/index.php?p=public_team_info_basic.php&team_id=32476" style="color: black;">Orli Znojmo</a>', 
            'matches':1, 
            'win':0,
            'winPP': 0,
            'losePP': 0, 
            'lose':1,
            'score':"1 : 6", 
            'diffscore': -5,
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
                            <td style="text-align: center; color: white; background-color: #6c757d;">${person.points}</td>
                      </tr>`

        }
       
        tableBody.innerHTML = dataHtml;
        
    }

   
personData.sort((a, b) => {
    if ( a === b){
        return 0;
    }
    return a.points > b.points ? -1 : 1 && a.diffscore > b.diffscore ? -1 : 1;   
});

personData;

