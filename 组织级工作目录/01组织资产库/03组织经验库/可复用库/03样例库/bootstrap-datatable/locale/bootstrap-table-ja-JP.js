/**
 * Bootstrap Table Japanese translation
 * Author: Azamshul Azizy <azamshul@gmail.com>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['ja-JP'] = {
        formatLoadingMessage: function () {
            return '読み込み中です。少々お待ちください�?;
        },
        formatRecordsPerPage: function (pageNumber) {
            return 'ページ当たり最�? + pageNumber + '�?;
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return '�? + totalRows + '件から�?+ pageFrom + 'から' + pageTo + '件目まで表示していま�?;
        },
        formatSearch: function () {
            return '検索';
        },
        formatNoMatches: function () {
            return '該当するレコードが見つかりません';
        },
        formatPaginationSwitch: function () {
            return 'ページ数を表示・非表�?;
        },
        formatRefresh: function () {
            return '更新';
        },
        formatToggle: function () {
            return 'トグ�?;
        },
        formatColumns: function () {
            return '�?;
        },
        formatAllRows: function () {
            return 'すべ�?;
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ja-JP']);

})(jQuery);