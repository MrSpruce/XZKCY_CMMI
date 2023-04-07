/**
 * Bootstrap Table Vietnamese translation
 * Author: Duc N. PHAM <pngduc@gmail.com>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['vi-VN'] = {
        formatLoadingMessage: function () {
            return 'Đang tải...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' bản ghi mỗi trang';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Hiển th�?t�?trang ' + pageFrom + ' đến ' + pageTo + ' của ' + totalRows + ' bảng ghi';
        },
        formatSearch: function () {
            return 'Tìm kiếm';
        },
        formatNoMatches: function () {
            return 'Không có d�?liệu';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['vi-VN']);

})(jQuery);