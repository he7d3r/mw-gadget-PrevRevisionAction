/**
 * Action link: Last revision diff
 *
 * @source: www.mediawiki.org/wiki/Snippets/Last_revision_action
 * @rev: 7a
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/LastRevisionAction.js]] ([[File:User:Helder.wiki/Tools/LastRevisionAction.js]])
 */
/*jslint browser: true, white: true*/
/*global mediaWiki, jQuery */
( function ( mw, $ ) {
'use strict';

$( function ( $ ) {
        // Not on Special pages
        if ( !mw.config.get('wgCanonicalSpecialPageName') ) {
                var     url,
                        $plink = $('#t-permalink').find('a');
                if ( $plink.length ) {
                        url = $plink.attr('href').replace( '&oldid=', '&diff=' );
                } else {
                        url = mw.util.wikiGetlink( mw.config.get( 'wgPageName' ), { diff: 0} );
                }
                mw.util.addPortletLink( 'p-namespaces', url, '↶', 'ca-lastdiff', 'Comparar com a versão anterior' );
        }
} );

}( mediaWiki, jQuery ) );