/**
 * Bootstrap Table Croatian translation
 * Author: Petra ?trbenac (petra.strbenac@gmail.com)
 * Author: Petra ?trbenac (petra.strbenac@gmail.com)
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['hr-HR'] = {
        formatLoadingMessage: function () {
            return 'Molimo pri?ekajte ...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' broj zapisa po stranici';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Prikazujem ' + pageFrom + '. - ' + pageTo + '. od ukupnog broja zapisa ' + totalRows;
        },
        formatSearch: function () {
            return 'Pretra?i';
        },
        formatNoMatches: function () {
            return 'Nije prona?en niti jedan zapis';
        },
        formatPaginationSwitch: function () {
            return 'Prika?i/sakrij stranice';
        },
        formatRefresh: function () {
            return 'Osvje?i';
        },
        formatToggle: function () {
            return 'Promijeni prikaz';
        },
        formatColumns: function () {
            return 'Kolone';
        },
        formatAllRows: function () {
            return 'Sve';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hr-HR']);

})(jQuery);
