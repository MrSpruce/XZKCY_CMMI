/**
 * Bootstrap Table Korean translation
 * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['ko-KR'] = {
        formatLoadingMessage: function () {
            return '데이터를 불러오는 중입니다...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return '페이지 �?' + pageNumber + '�?데이�?출력';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return '전체 ' + totalRows + '�?�?' + pageFrom + '~' + pageTo + '번째 데이�?출력,';
        },
        formatSearch: function () {
            return '검�?;
        },
        formatNoMatches: function () {
            return '조회�?데이터가 없습니다.';
        },
        formatRefresh: function () {
            return '새로 고침';
        },
        formatToggle: function () {
            return '전환';
        },
        formatColumns: function () {
            return '컬럼 필터�?;
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ko-KR']);

})(jQuery);