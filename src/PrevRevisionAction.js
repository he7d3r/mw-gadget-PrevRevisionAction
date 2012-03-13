/**
 * Action link: Last revision diff
 *
 * @source: http://www.mediawiki.org/wiki/Snippets/Last_revision_action
 * @rev: 5
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/PAGENAME.js]] ([[File:User:Helder.wiki/Tools/PAGENAME.js]])
 */
/*global $, mw */
/*jslint white: true */
$(function () {
'use strict';

$( function ( $ ) {
        // Not on Special pages
        if ( !mw.config.get('wgCanonicalSpecialPageName') ) {
                var     url,
                        $plink = $('#t-permalink a');
                if ( $plink.length ) {
                        url = $plink.attr('href').replace( '&oldid=', '&diff=prev&oldid=' );
                } else {
                        url = mw.util.wikiGetlink( mw.config.get( 'wgPageName' ) ) + '?diff=0';
                }
                mw.util.addPortletLink( 'p-cactions', url, '↶', 'ca-lastdiff', 'Mostrar as alterações feitas na última edição' );
        }
} );

});