/**
 * Action link: Prev revision diff
 *
 * @source: www.mediawiki.org/wiki/Snippets/Last_revision_action
 * @rev: 9
 */
( function ( mw, $ ) {
	'use strict';

	mw.hook( 'wikipage.content' ).add( function () {
		// Not on Special pages
		if ( mw.config.get( 'wgCanonicalSpecialPageName' ) ) {
			return;
		}
		var url = mw.util.getUrl( mw.config.get( 'wgPageName' ) ) +
			'?diff=' + ( mw.config.get( 'wgRevisionId' ) || mw.config.get( 'wgCurRevisionId' ) ),
			$link = $('#ca-prevdiff').find('a');
		if ( $link.length ) {
			$link.attr( 'href', url );
		} else {
			mw.util.addPortletLink( 'p-namespaces', url, '↶', 'ca-prevdiff', 'Show diff to previous edit' );
		}
	} );

}( mediaWiki, jQuery ) );
