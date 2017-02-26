;(function($) {
    $(document).ready(function() {
				$('#views-form-hosting-site-list-page-sites a').each(function (index, el) {
						if ($(el).html() == 'hostmaster') {
								$(el).closest('tr').hide();
						}
				});
		});
}(jQuery));
