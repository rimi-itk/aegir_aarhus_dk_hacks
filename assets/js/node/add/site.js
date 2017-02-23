;(function($) {
		$(document).ready(function() {
				var id;

				var masterDomain = function(url) {
						var match = new RegExp("://([^/]+)/").exec(url);
						return match[1];
				}(document.location.href);

				$('#edit-title').val('.' + masterDomain);
				// $('#edit-client').val('Aarhus kommune');

				id = $('label[for^="edit-profile"]:contains("ITKore")').attr('for');
				$('#' + id).attr('checked', 'checked');

				id = $('label[for^="edit-platform"]:contains("ITKore")').attr('for');
				$('#' + id).attr('checked', 'checked');

				id = $('label[for^="edit-site-language"]:contains("Danish")').attr('for');
				$('#' + id).attr('checked', 'checked');

				$('#hosting-site-field-client, #hosting-site-field-profile, #hosting-site-field-platform, #hosting-site-field-site-language, #hosting-site-field-db-server').hide();
});
}(jQuery));
