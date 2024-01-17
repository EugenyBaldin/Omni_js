$(function() {
    // var CASE_ID = CurrentCaseId;
    // var CASE_URL = document.location.href;

    var checkNotUndefined = function(data) {
        return (typeof data === 'undefined') ? false : true;
    }

    var INTEGRATION_PANEL_SELECTOR = '#integrations_info_panel';

    $.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange', {
        'coursid' : 5,
    }, function(data) {
        //Создаем HTML для вставки
        var html = '';

        html = '<div class="right_info_panels">';
            html += '<ul>';
                if(checkNotUndefined(data.length) === true && data.length > 0) {
                    for(var index in data) {
                        var currency = data[index];

                        if(checkNotUndefined(currency.ccy) === true) {
                            html += '<li>' + currency.ccy + ' : ' + currency.buy + '</li>';
                        }
                    }
                }
            html += '</ul>';
        html += '</div>';

        //Вставка в блок
        addCode(INTEGRATION_PANEL_SELECTOR, html, false);
    }, 'json');

    /**
     * Добавляем форму и отправляем ее данные на условный сайт
     */
    // var form = '';

    // form = '<form action="' + URL + '" method="POST" id="example-form">';
    //     form += '<input type="text" value="" name="example-name" placeholder="Example Data">';
    //     form += '<button>Отправить</button>';
    // form += '</form>';

    // addCode(INTEGRATION_PANEL_SELECTOR, form, true);

    // $(document).on('submit', '#example-form', function(event) {
    //     event.preventDefault();
    //     var formEl = $(this);

    //     $.post(formEl.attr('action'), {
    //         //Данные формы
    //         exampleData: formEl.find('[name="example-name"]').val(),
    //         //ID обращения
    //         case_id: CASE_ID,
    //         //Ссылка на обращение в омнидеске
    //         case_url: CASE_URL,
    //     }, function(response) {
    //         formEl.append('<span style="color: green>Success!</span>');
    //     });
    // })


});