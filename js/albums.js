var Albums = {
	
	init: function() {
		Albums.events();
	},

	events: function() {
		$('body').on ('click touch', '#editAlbums', Albums.editAlbums);
		$('body').on ('click touch', '#addAlbumBtn', Albums.openAddAlbumModal);
		$('body').on ('click touch', '#closeAddAlbumModal', Albums.closeAddAlbumModal);
		$('body').on ('click touch', '.albumTitle', Albums.editTitle);
		$('body').on ('click touch', '#closeEditAlbumTitleModal', Albums.closeEditTitle);
		$('body').on ('click touch', '.album', Albums.selectAlbum);
		$('body').on ('click touch', '#deleteBtn', Albums.deleteAlbum);
		$('body').on ('click touch', '#closeDeleteAlbumModal', Albums.closeDeleteModal);
		$('body').on ('click touch', '#saveAlbumTitleBtn', Albums.saveAlbumTitle);

	},

	editAlbums: function() {
		var $title = $('.albumTitle');
		var $mainMenu = $('#mainMenu');
		var $editMenu = $('#editMenu');
		var $editBtn = $('.editText');
		var $album = $('.mainImage');
		var $folder1 = $('.folder1');
		var $folder2 = $('.folder2');

		if($mainMenu.css("display") == "none") {
			$mainMenu.fadeIn();
			$editMenu.css('display', 'none');
			$('#headerTitle').text('Albums');
			$editBtn.html('edit');
			Albums.removeSelection();
		} else {
			$mainMenu.css('display', 'none');
			$editMenu.fadeIn();
			$editBtn.html('cancel');
			$('#headerTitle').text('Edit Albums');
			$title.addClass('editAlbumTitle');
		}
	},

	openAddAlbumModal: function() {
		var $modal = $('#addAlbumModal');

		$modal.fadeIn();
		$('#blur').addClass('blur');
	},

	closeAddAlbumModal: function() {
		var $modal = $('#addAlbumModal');

		$modal.fadeOut();
		$('#blur').removeClass('blur');
	},

	editTitle: function() {
		var $title = $('.albumTitle');
		var $this = $(this);
		var $mainMenu = $('#mainMenu');
		var $modal = $('#editAlbumTitleModal');

		if($mainMenu.css("display") == "none") {
			$modal.fadeIn();
			$('#blur').addClass('blur');
			Albums.selectAlbum();
		}
	},

	closeEditTitle: function() {
		var $title = $('.albumTitle');
		var $this = $(this);
		var $modal = $('#editAlbumTitleModal');
			
		$modal.fadeOut();
		$('#blur').removeClass('blur');
	},

	saveAlbumTitle: function() {
		var $this = $(this);
		var $input = $this.closest('#editAlbumTitleModal').find('#albumTitleInput');
		var $title = $this.find('.albumTitle');
		var $modal = $('#editAlbumTitleModal');

		var newTitle = $input.val();

		console.log($title);

		$title.text(newTitle);

		$modal.fadeOut();
		$('#blur').removeClass('blur');
	},

	selectAlbum: function() {
		var $this = $(this);
		var $container = $('.album');
		var $title = $this.closest('.album').find('.albumTitle');
		var $album = $this.closest('.album').find('.mainImage');
		var $folder1 = $this.closest('.album').find('.folder1');
		var $folder2 = $this.closest('.album').find('.folder2');
		var $mainMenu = $('#mainMenu');
		console.log($title);

		Albums.removeSelection();

		if($mainMenu.css("display") == "none") {
			$title.removeClass('editAlbumTitle');
			$title.addClass('selectAlbumTitle');
			$album.addClass('selectAlbum');
			$folder1.addClass('selectFolder');
			$folder2.addClass('selectFolder');
			$container.addClass('selected');
		}
	},

	removeSelection: function() {
		var $title = $('.albumTitle');
		var $mainMenu = $('#mainMenu');
		var $editMenu = $('#editMenu');
		var $editBtn = $('.editText');
		var $album = $('.mainImage');
		var $folder1 = $('.folder1');
		var $folder2 = $('.folder2');
		var $container = $('.album');

		$title.removeClass('editAlbumTitle');
		$title.removeClass('selectAlbumTitle');
		$album.removeClass('selectAlbum');
		$folder1.removeClass('selectFolder');
		$folder2.removeClass('selectFolder');
		$container.removeClass('selected');
	},

	deleteAlbum: function() {
		var $container = $('.album');
		var $modal = $('#deleteAlbumModal');

		if($container.hasClass('selected')) {
			$modal.fadeIn();
			$('#blur').addClass('blur');
		}
	},

	closeDeleteModal: function() {
		var $modal = $('#deleteAlbumModal');

		Albums.removeSelection();

		$modal.fadeOut();
		$('#blur').removeClass('blur');
	}


}

$(document).ready(function() {
	Albums.init();
});