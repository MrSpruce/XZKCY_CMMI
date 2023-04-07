/**
 * Bootstrap Table Thai translation
 * Author: Monchai S.<monchais@gmail.com>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['th-TH'] = {
        formatLoadingMessage: function () {
            return 'กำลังโหลดข้อมู�? กรุณารอสักครู่...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' รายการต่อหน้�?;
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'รายการที�?' + pageFrom + ' ถึ�?' + pageTo + ' จากทั้งหมด ' + totalRows + ' รายการ';
        },
        formatSearch: function () {
            return 'ค้นห�?;
        },
        formatNoMatches: function () {
            return 'ไม่พบรายการที่ค้นห�?!';
        },
        formatRefresh: function () {
            return 'รีเฟร�?;
        },
        formatToggle: function () {
            return 'สลับมุมมอง';
        },
        formatColumns: function () {
            return 'คอลัมน�?;
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['th-TH']);

})(jQuery);
