const btn = document.getElementById("done-btn");
const resultArea = document.getElementById("result");

btn.addEventListener("click", function () {
  // Получаем значения элементов
  const message = document.getElementById("messageInput").value;
  const repeat = parseInt(document.getElementById("repeat").value);

  // Получаем состояния чекбоксов
  const numbered = document.getElementById("numbered").checked;
  const quotes = document.getElementById("quotes").checked;
  const separator = document.getElementById("separator").checked;

  // Проверка валидности ввода
  if (!message) {
    alert("Пожалуйста, введите сообщение!");
    return;
  }

  if (isNaN(repeat) || repeat <= 0) {
    alert("Пожалуйста, введите корректное число повторений!");
    return;
  }

  // Очищаем предыдущий результат
  resultArea.value = "";

  // Формируем результат с учетом выбранных опций
  let output = "";
  for (let i = 1; i <= repeat; i++) {
    let line = message;

    // Добавляем кавычки
    if (quotes) {
      line = `"${line}"`;
    }

    // Добавляем нумерацию
    if (numbered) {
      line = `${i}. ${line}`;
    }

    // Добавляем разделитель
    if (separator && i < repeat) {
      line += "\n--------------------------------\n";
    } else if (i < repeat) {
      line += "\n\n";
    }

    output += line;
  }

  // Записываем результат в textarea
  resultArea.value = output;

  // Прокручиваем к результату
  resultArea.scrollIntoView({ behavior: "smooth" });
});
