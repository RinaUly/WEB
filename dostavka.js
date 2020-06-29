alert("Добро пожаловать!")

//записываем кафе
let button = document.getElementById('closeMENU');
let max = 0;
let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');
let name3 = document.getElementById('name3');



let types1 = document.getElementById('types1');
let types2 = document.getElementById('types2');
let types3 = document.getElementById('types3');



let restAddress1 = document.getElementById('restAddress1');
let restAddress2 = document.getElementById('restAddress2');
let restAddress3 = document.getElementById('restAddress3');
let id1 = 0;
let id2 = 0;
let id3 = 0;
let prev = document.getElementById('Prev');
let nex = document.getElementById('Nex');
let allMount = 0;
let newAllprice = 0;
let newAllpriceHOT = 0;
let mount1 = document.getElementById('TName1');
let mountSet1 = mount1.value;
let modified = 0;
let mount2 = document.getElementById('TName2');
let mountSet2 = mount2.value;

let mount3 = document.getElementById('TName3');
let mountSet3 = mount3.value;

let mount4 = document.getElementById('TName4');
let mountSet4 = mount4.value;

let mount5 = document.getElementById('TName5');
let mountSet5 = mount5.value;

let mount6 = document.getElementById('TName6');
let mountSet6 = mount6.value;

let mount7 = document.getElementById('TName7');
let mountSet7 = mount7.value;

let mount8 = document.getElementById('TName8');
let mountSet8 = mount8.value;

let mount9 = document.getElementById('TName9');
let mountSet9 = mount9.value;

let mount10 = document.getElementById('TName10');
let mountSet10 = mount10.value;


let currentName = name1;
let idCurrent = 0;
let allPrice = 0;
function set1plus(){
  mountSet1++;
  mount1.value = mountSet1;

}

function set1minus(){
  if (mountSet1>0){
    mountSet1--;
    mount1.value = mountSet1;
  }
}

function set2plus(){
  mountSet2++;
  mount2.value = mountSet2;

}

function set2minus(){
  if (mountSet2>0){
    mountSet2--;
    mount2.value = mountSet2;
  }
}

function set3plus(){
  mountSet3++;
  mount3.value = mountSet3;

}

function set3minus(){
  if (mountSet3>0){
    mountSet3--;
    mount3.value = mountSet3;
  }
}

function set4plus(){
  mountSet4++;
  mount4.value = mountSet4;

}
function set4minus(){
  if (mountSet4>0){
    mountSet4--;
    mount4.value = mountSet4;
  }
}

function set5plus(){
  mountSet5++;
  mount5.value = mountSet5;

}



function set5minus(){
  if (mountSet5>0){
    mountSet5--;
    mount5.value = mountSet5;
  }
}

function set6plus(){
  mountSet6++;
  mount6.value = mountSet6;

}

function set6minus(){
  if (mountSet6>0){
    mountSet6--;
    mount6.value = mountSet6;
  }
}

function set7plus(){
  mountSet7++;
  mount7.value = mountSet7;

}

function set7minus(){
  if (mountSet7>0){
    mountSet7--;
    mount7.value = mountSet7;
  }
}

function set8plus(){
  mountSet8++;
  mount8.value = mountSet8;
}

function set8minus(){
  if (mountSet8>0){
    mountSet8--;
    mount8.value = mountSet8;
  }
}

function set9plus(){
  mountSet9++;
  mount9.value = mountSet9;

}



function set9minus(){
  if (mountSet9>0){
    mountSet9--;
    mount9.value = mountSet9;
  }
}

function set10plus(){
  mountSet10++;
  mount10.value = mountSet10;

}

function set10minus(){
  if (mountSet10>0){
    mountSet10--;
    mount10.value = mountSet10;
  }
}



function showHide(element_id,number) {
  let oftp = new XMLHttpRequest();
  oftp.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);
  oftp.send();
  oftp.onreadystatechange = function(){
      if(oftp.readyState != 4) return;
      if(oftp.status != 200){
        alert('Сервер недоступен ' + oftp.status + ' ' + oftp.statusText);
        return;
      }

      const sets = JSON.parse(oftp.response).map(alname=>({id:alname.id, name:alname.name ,set1:alname.set_1, set2:alname.set_2, set3:alname.set_3, set4:alname.set_4, set5:alname.set_5, set6:alname.set_6, set7:alname.set_7, set8:alname.set_8, set9:alname.set_9, set10:alname.set_10 }));
      console.log(sets);

      if(number == 1){

               if (document.getElementById(element_id)) {

                   var obj = document.getElementById(element_id);

                   if (obj.style.display != "block") {
                       obj.style.display = "block";

                       sets.forEach((element,i) => {
                         if(sets[i].id == id1){
                            $('#set1').html(sets[i].set1);
                            $('#set2').html(sets[i].set2);
                            $('#set3').html(sets[i].set3);
                            $('#set4').html(sets[i].set4);
                            $('#set5').html(sets[i].set5);
                            $('#set6').html(sets[i].set6);
                            $('#set7').html(sets[i].set7);
                            $('#set8').html(sets[i].set8);
                            $('#set9').html(sets[i].set9);
                            $('#set10').html(sets[i].set10);
                            idCurrent = id1;
                         }
                       });
                   }

               }

               else alert("Элемент с id: " + element_id + " не найден!");
}
}

if(number == 2){

         if (document.getElementById(element_id)) {

             var obj = document.getElementById(element_id);

             if (obj.style.display != "block") {
                 obj.style.display = "block";

                 sets.forEach((element,i) => {
                   if(sets[i].id == id2){
                      $('#set1').html(sets[i].set1);
                      $('#set2').html(sets[i].set2);
                      $('#set3').html(sets[i].set3);
                      $('#set4').html(sets[i].set4);
                      $('#set5').html(sets[i].set5);
                      $('#set6').html(sets[i].set6);
                      $('#set7').html(sets[i].set7);
                      $('#set8').html(sets[i].set8);
                      $('#set9').html(sets[i].set9);
                      $('#set10').html(sets[i].set10);
                      idCurrent = id2;
                   }
                 });

             }

         }
         else alert("Элемент с id: " + element_id + " не найден!");
}

if(number == 3){

         if (document.getElementById(element_id)) {
             var obj = document.getElementById(element_id);
             if (obj.style.display != "block") {
                 obj.style.display = "block";




                 sets.forEach((element,i) => {
                   if(sets[i].id == id3){
                      $('#set1').html(sets[i].set1);
                      $('#set2').html(sets[i].set2);
                      $('#set3').html(sets[i].set3);
                      $('#set4').html(sets[i].set4);
                      $('#set5').html(sets[i].set5);
                      $('#set6').html(sets[i].set6);
                      $('#set7').html(sets[i].set7);
                      $('#set8').html(sets[i].set8);
                      $('#set9').html(sets[i].set9);
                      $('#set10').html(sets[i].set10);
                      idCurrent = id3;
                   }
                 });
             }

         }

         else alert("Ой! Ошибка");
}
}


function closeHide(block){

  if (document.getElementById(block)) {

      var obj = document.getElementById(block);

      if (obj.style.display == "block") {
          obj.style.display = "none";
      }

  }

  else alert("Ой! Ошибка);
}

function numberWasSteel(){
  let oftp = new XMLHttpRequest();
  oftp.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);
  oftp.send();
  oftp.onreadystatechange = function(){
      if(oftp.readyState != 4) return;
      if(oftp.status != 200){
        alert('Сервер недоступен ' + oftp.status + ' ' + oftp.statusText);
        return;
      }

      const namesArray = JSON.parse(oftp.response).map(alname=>({id:alname.id,name:alname.name, typeObject:alname.typeObject, address:alname.address }));
      console.log(namesArray);

    if (max<0){
      max=0;
    }

       $('#name1').html(namesArray[max].name);
        $('#types1').html(namesArray[max].typeObject);
         $('#restAddress1').html(namesArray[max].address);
         id1 = namesArray[max].id;
       max++;
       $('#name2').html(namesArray[max].name);
        $('#types2').html(namesArray[max].typeObject);
         $('#restAddress2').html(namesArray[max].address);
         id2 = namesArray[max].id;

         max++;
          $('#name3').html(namesArray[max].name);
           $('#types3').html(namesArray[max].typeObject);
            $('#restAddress3').html(namesArray[max].address);
            id3 = namesArray[max].id;


}
}
function paginationNavPrev(){
  let oftp = new XMLHttpRequest();
  oftp.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);
  oftp.send();
  oftp.onreadystatechange = function(){
      if(oftp.readyState != 4) return;
      if(oftp.status != 200){
        alert('Сервер недоступен ' + oftp.status + ' ' + oftp.statusText);
        return;
      }

      const namesArray = JSON.parse(oftp.response).map(alname=>({id:alname.id, name:alname.name, typeObject:alname.typeObject, address:alname.address }));
      console.log(namesArray);
  max--;
  if(max>0){
        $('#name1').html(namesArray[max].name);
         $('#types1').html(namesArray[max].typeObject);
          $('#restAddress1').html(namesArray[max].address);
          id1 = namesArray[max].id;

        }
          max--;
          if(max>0){
          $('#name2').html(namesArray[max].name);
           $('#types2').html(namesArray[max].typeObject);
            $('#restAddress2').html(namesArray[max].address);
            id2 = namesArray[max].id;

          }
            max--;
            if(max>0){
            $('#name3').html(namesArray[max].name);
             $('#types3').html(namesArray[max].typeObject);
              $('#restAddress3').html(namesArray[max].address);
              id3 = namesArray[max].id;

            }
          }
      }

function countMount(){
  let oftp = new XMLHttpRequest();
  oftp.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);
  oftp.send();
  oftp.onreadystatechange = function(){
      if(oftp.readyState != 4) return;
      if(oftp.status != 200){
        alert('Сервер недоступен ' + oftp.status + ' ' + oftp.statusText);
        return;
      }

      const sets = JSON.parse(oftp.response).map(alname=>({id:alname.id, name:alname.name ,set1:alname.set_1, set2:alname.set_2, set3:alname.set_3, set4:alname.set_4, set5:alname.set_5, set6:alname.set_6, set7:alname.set_7, set8:alname.set_8, set9:alname.set_9, set10:alname.set_10 }));
      console.log(sets);

      sets.forEach((element,i) => {
        if(sets[i].id == idCurrent){
          currentName = sets[i].name;
          allPrice = (sets[i].set1 * mountSet1) + (sets[i].set2 * mountSet2) + (sets[i].set3 * mountSet3) + (sets[i].set4 * mountSet4) + (sets[i].set5 * mountSet5) + (sets[i].set6 * mountSet6) + (sets[i].set7 * mountSet7) + (sets[i].set8 * mountSet8) + (sets[i].set9 * mountSet9) + (sets[i].set10 * mountSet10);
          allPrice = allPrice + 250;
}
});
console.log(allPrice);
var values = [];
$('input[type="checkbox"]:checked').each(function() {
  values.push($(this).val());
});

if(values[0]=='on'){
  allPrice = allPrice * 1.2;
}
$('#modalAmount').html(allPrice);
$('#resName').html(currentName);
newAllprice = allPrice * 1.2;



}
}

function check_boxesFAST(){
  var values = [];
  $('input[type="checkbox"]:checked').each(function() {
    values.push($(this).val());
  });

  if(values[0]=='on' && newAllprice!=allPrice*2){
    $('#modalAmount').html(newAllprice);
    modified = 1;
  } else if(values[0]!='on'){
    $('#modalAmount').html(allPrice);
    modified = 0;
  }
}

function check_boxesHOT(){
  var values = [];
  $('input[type="checkbox"]:checked').each(function() {
    values.push($(this).val());
  });

if(modified==0){
  newAllpriceHOT = allPrice * 0.7;
} else if(modified==1){
  newAllpriceHOT = newAllprice * 0.7;
}


if(values[1]=='on' && modified==1){
  let block = document.getElementById('hideen');
  block.style.display = 'block';
  $('#changedPRICE').html(newAllpriceHOT);
} else if(values[0]=='on' && modified==0){
  let block = document.getElementById('hideen');
  block.style.display = 'block';
  $('#changedPRICE').html(newAllpriceHOT);
} else {
  let block = document.getElementById('hideen');
  block.style.display = 'none';
}
}

 numberWasSteel();
