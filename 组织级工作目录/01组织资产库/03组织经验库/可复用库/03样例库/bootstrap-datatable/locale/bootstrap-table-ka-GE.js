/**
 * Bootstrap Table Georgian translation
 * Author: Levan Lotuashvili <l.lotuashvili@gmail.com>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['ka-GE'] = {
        formatLoadingMessage: function() {
            return 'იტვირთებ�? გთხოვთ მოიცადოთ...';
        },
        formatRecordsPerPage: function(pageNumber) {
            return pageNumber + ' ჩანაწერი თითო გვერდზ�?;
        },
        formatShowingRows: function(pageFrom, pageTo, totalRows) {
            return 'ნაჩვენებია ' + pageFrom + '-და�?' + pageTo + '-მდ�?ჩანაწერი ჯამური ' + totalRows + '-და�?;
        },
        formatSearch: function() {
            return 'ძებნ�?;
        },
        formatNoMatches: function() {
            return 'მონაცემები არ არის';
        },
        formatPaginationSwitch: function() {
            return 'გვერდები�?გადამრთველის დამალვ�?გამოჩენა';
        },
        formatRefresh: function() {
            return 'განახლებ�?;
        },
        formatToggle: function() {
            return 'ჩართვა/გამორთვა';
        },
        formatColumns: function() {
            return 'სვეტებ�?;
        }
    };
    
    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ka-GE']);

})(jQuery);
