// Подключаем JQuery
// Пишем скрипт, который будет обрабатывать наши задачи и хранить их на нашем устройстве
// Заводим переменные под наши задачи
var List1 = $('#tdl1App ul');
var Mask1 = 'tdl1_';
var List2 = $('#tdl2App ul');
var Mask2 = 'tdl2_';
var List3 = $('#tdl3App ul');
var Mask3 = 'tdl3_';
var List4 = $('#tdl4App ul');
var Mask4 = 'tdl4_';
// Функция, которая берёт из памяти наши задачи и делает из них список
function showTasks() {
  // Узнаём размер хранилища
  var Storage_size = localStorage.length;
  // Если в хранилище что-то есть…
  if (Storage_size > 0) {
    // то берём и добавляем это в задачи  
    for (var i = 0; i < Storage_size; i++) {
      var key = localStorage.key(i);
      // обрабатываем первый список
      if (key.indexOf(Mask1) == 0) {
        // и делаем это элементами списка
        $('<li></li>').addClass('tdItem')
          .attr('data-itemid', key)
          .text(localStorage.getItem(key))
          .appendTo(List1);
      }
      // обрабатываем второй список
      if (key.indexOf(Mask2) == 0) {
        // и делаем это элементами списка
        $('<li></li>').addClass('tdItem')
          .attr('data-itemid', key)
          .text(localStorage.getItem(key))
          .appendTo(List2);
      }
      // обрабатываем третий список
      if (key.indexOf(Mask3) == 0) {
        // и делаем это элементами списка
        $('<li></li>').addClass('tdItem')
          .attr('data-itemid', key)
          .text(localStorage.getItem(key))
          .appendTo(List3);
      }
      // обрабатываем четвёртый список
      if (key.indexOf(Mask4) == 0) {
        // и делаем это элементами списка
        $('<li></li>').addClass('tdItem')
          .attr('data-itemid', key)
          .text(localStorage.getItem(key))
          .appendTo(List4);
      }
    }
  }
}
// Сразу вызываем эту функцию, вдруг в памяти уже остались задачи с прошлого раза
showTasks();
// Следим, когда пользователь напишет новую задачу в первое поле ввода и нажмёт Enter
$('#tdl1App input').on('keydown', function (e) {
  if (e.keyCode != 13) return;
  var str = e.target.value;
  e.target.value = "";
  // Если в поле ввода было что-то написано — начинаем обрабатывать
  if (str.length > 0) {
    var number_Id_1 = 0;
    List1.children().each(function (index, el) {
      var element_Id_1 = $(el).attr('data-itemid').slice(5);
      if (element_Id_1 > number_Id_1)
        number_Id_1 = element_Id_1;
    })
    number_Id_1++;
    // Отправляем новую задачу сразу в память
    localStorage.setItem(Mask1 + number_Id_1, str);
    // и добавляем её в конец списка
    $('<li></li>').addClass('tdItem')
      .attr('data-itemid', Mask1 + number_Id_1)
      .text(str).appendTo(List1);
  }
});
// Следим, когда пользователь напишет новую задачу во второе поле ввода и нажмёт Enter
$('#tdl2App input').on('keydown', function (e) {
  if (e.keyCode != 13) return;
  var str = e.target.value;
  e.target.value = "";
  // Если в поле ввода было что-то написано — начинаем обрабатывать
  if (str.length > 0) {
    var number_Id_2 = 0;
    List2.children().each(function (index, el) {
      var element_Id_2 = $(el).attr('data-itemid').slice(5);
      if (element_Id_2 > number_Id_2)
        number_Id_2 = element_Id_2;
    })
    number_Id_2++;
    // Отправляем новую задачу сразу в память
    localStorage.setItem(Mask2 + number_Id_2, str);
    // и добавляем её в конец списка
    $('<li></li>').addClass('tdItem')
      .attr('data-itemid', Mask2 + number_Id_2)
      .text(str).appendTo(List2);
  }
});
// Следим, когда пользователь напишет новую задачу в третье поле ввода и нажмёт Enter
$('#tdl3App input').on('keydown', function (e) {
  if (e.keyCode != 13) return;
  var str = e.target.value;
  e.target.value = "";
  // Если в поле ввода было что-то написано — начинаем обрабатывать
  if (str.length > 0) {
    var number_Id_3 = 0;
    List3.children().each(function (index, el) {
      var element_Id_3 = $(el).attr('data-itemid').slice(5);
      if (element_Id_3 > number_Id_3)
        number_Id_3 = element_Id_3;
    })
    number_Id_3++;
    // Отправляем новую задачу сразу в память
    localStorage.setItem(Mask3 + number_Id_3, str);
    // и добавляем её в конец списка
    $('<li></li>').addClass('tdItem')
      .attr('data-itemid', Mask3 + number_Id_3)
      .text(str).appendTo(List3);
  }
});
// Следим, когда пользователь напишет новую задачу в четвёртое поле ввода и нажмёт Enter
$('#tdl4App input').on('keydown', function (e) {
  if (e.keyCode != 13) return;
  var str = e.target.value;
  e.target.value = "";
  // Если в поле ввода было что-то написано — начинаем обрабатывать
  if (str.length > 0) {
    var number_Id_4 = 0;
    List4.children().each(function (index, el) {
      var element_Id_4 = $(el).attr('data-itemid').slice(5);
      if (element_Id_4 > number_Id_4)
        number_Id_4 = element_Id_4;
    })
    number_Id_4++;
    // Отправляем новую задачу сразу в память
    localStorage.setItem(Mask4 + number_Id_4, str);
    // и добавляем её в конец списка
    $('<li></li>').addClass('tdItem')
      .attr('data-itemid', Mask4 + number_Id_4)
      .text(str).appendTo(List4);
  }
});
// По клику на задаче — убираем её из списка
$(document).on('click', '.tdItem', function (e) {
  // Находим задачу, по которой кликнули
  var jet = $(e.target);
  // Убираем её из памяти
  localStorage.removeItem(jet.attr('data-itemid'));
  // и убираем её из списка
  jet.remove();
})
// Закончился основной скрипт