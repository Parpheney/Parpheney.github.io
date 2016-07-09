"use strict";

$(function () {
    var data = {
        title: "Тест по программированию",
        submit: "Проверить мои результаты",
        result: "Ваш результат:",
        close: "CLOSE",
        fields: [{ question: "Вопрос №1",
            lebel: ["1", "2", "3"],
            id: ["1", "2", "3"],
            answer: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
            correct: 1 }, { question: "Вопрос №2",
            lebel: ["1", "2", "3"],
            id: ["1", "2", "3"],
            answer: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
            correct: 3 }, { question: "Вопрос №3",
            lebel: ["1", "2", "3"],
            id: ["1", "2", "3"],
            answer: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
            correct: 2 }]
    };
    localStorage.setItem('test', JSON.stringify(data));
    var $app = JSON.parse(localStorage.getItem('test'));

    var wrapper = $('<div class="wrapper">');
    var form = $('<form id="questionForm">');
    wrapper.append($("<h1>" + $app.title + "</h1>"));
    wrapper.append(form);
    for (var i = 0; i < $app.fields.length; i++) {
        var questions = $('<div class="group">');
        questions.append($("<h3>" + $app.fields[i].question + "</h3>"));
        for (var j = 0; j < $app.fields[i].answer.length; j++) {
            var answers = $('<div class="answers">');
            answers.append("<input type=\"checkbox\"  id=\"" + $app.fields[i].id[j] + "\">");
            answers.append("<label for=\"" + $app.fields[i].lebel[j] + "\">" + $app.fields[i].answer[j] + "</label>");
            questions.append(answers);
        }
        form.append(questions);
    }
    var windows = $('<div class="modal">');
    var modalWindows = $("<div class=\"modal-window\">");
    var modalHeader = $("<div class=\"modal-header\">");
    var modalFooter = $("<div class=\"modal-footer\">");
    modalWindows.append($(modalHeader));
    modalWindows.append($("<div class=\"result\">"));
    modalWindows.append($(modalFooter));
    modalHeader.append($("<h4>" + $app.result + "</h4>"));
    modalFooter.append($("<button id=\"close\">" + $app.close + "</button>"));
    windows.append(modalWindows);
    wrapper.append($("<button id=\"submit\">" + $app.submit + "</button>"));
    wrapper.append(windows);

    $('body').append(wrapper);

    function Result() {
        var $modal = $('.result');
        var $score = 0;
        var $chbarr = [];
        $('input:checked').each(function () {
            $chbarr.push($(this).attr('id'));
        });
        for (var _j = 0; _j < $app.fields.length; _j++) {
            if ($chbarr[_j] == $app.fields[_j].correct) {
                ++$score;
                $modal.append('<p class="correct">Bопрос №' + (_j + 1) + ' - верно!');
            } else {
                $modal.append('<p class="incorrect">Bопрос №' + (_j + 1) + ' - невернo!');
            }
        }
        $modal.append('<p class="summ"> Сумма правильных ответов: ' + $score);
        $('.modal').show();
    }
    function resetForm() {
        $('#questionForm').trigger('reset');
        $('.result').html('');
        $('.modal').hide();
    }
    $('input ').click(function (e) {
        if ($('input:checked').length > 3) {
            alert('Только три варианта!');
            resetForm();
            return false;
        }
    });
    $('#submit').on('click', Result);

    $('#close').on('click', resetForm);
});
