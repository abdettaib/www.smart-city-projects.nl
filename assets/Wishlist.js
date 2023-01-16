;(function (Wishlist, $) {

  var $wishlistButton = $('.wishlist-btn');
  var $addcartButton = $('.is-add-cart');
  var $wishlistTile = $('.wishlist-container');
  var numProductTiles = $wishlistTile.length;
  var wishlist = localStorage.getItem('user_wishlist') || [];
  if (wishlist.length > 0) {
    wishlist = JSON.parse(localStorage.getItem('user_wishlist'));
  }

  /*
   * Update button to show current state (gold for active)
   */   
  var animateWishlist = function (self) {
    $(self).toggleClass('is-active');
  };

  /*
   * Add/Remove selected item to the user's wishlist array in localStorage
   * Wishlist button class 'is-active' determines whether or not to add or remove
   * If 'is-active', remove the item, otherwise add it
   */   
  var updateWishlist = function (self) {
    var productHandle = $(self).attr('data-product-handle');
    var productId = $(self).attr('data-product-id');
    var isRemove = $(self).hasClass('is-active');
    var isaddCart = $(self).hasClass('is-add-cart');
    /* Remove */
    if (isRemove) {
      var removeIndex = wishlist.indexOf(productHandle);
      wishlist.splice(removeIndex, 1);
      localStorage.setItem('user_wishlist', JSON.stringify(wishlist));
      toastr.info('Product removed from wishlist.');
      $(self).closest('tbody').animate({'line-height':0},1500).hide(1);
    } else if(isaddCart) {
      //if(cart.add(productId)) {
      cart.add(productId);
      var removeIndex = wishlist.indexOf(productHandle);
      wishlist.splice(removeIndex, 1);
      localStorage.setItem('user_wishlist', JSON.stringify(wishlist));
      $(self).closest('tbody').animate({'line-height':0},1500).hide(1);
      // }
    } else {
      /* Add */ 
      wishlist.push(productHandle);
      localStorage.setItem('user_wishlist', JSON.stringify(wishlist));
      toastr.success('Product added to wishlist.');
    }
    //console.log(JSON.stringify(wishlist));
  };

  /*
   * Loop through wishlist buttons and activate any items that are already in user's wishlist
   * Activate by adding class 'is-active'
   * Run on initialization
   */   
  var activateItemsInWishlist = function () {
    $wishlistButton.each(function () {
      var productHandle = $(this).attr('data-product-handle');
      if (wishlist.indexOf(productHandle) > -1) {
        $(this).addClass('is-active');
      }
    });
  };

  /*
   * Loop through product titles and remove any that aren't a part of the wishlist
   * Decrement numProductTiles on removal
   */   
  var displayOnlyWishlistItems = function () {
    $wishlistTile.each(function () {
      var productHandle = $(this).attr('data-product-handle');
      if (wishlist.indexOf(productHandle) === -1) {
        $(this).remove();
        numProductTiles--;
      }
    });
  };

  /*
   * Check if on the wishlist page and hide any items that aren't a part of the wishlist
   * If no wishlist items exist, show the empty wishlist notice
   */   
  var loadWishlist = function () {
    if (window.top.location.href.indexOf('pages/wishlist') > -1) {
      displayOnlyWishlistItems();
      $('.wishlist-loader').fadeOut(2000, function () {
        $('.wishlist-product').show();
        //$('.wishlist-head').addClass('is_visible');
        if (numProductTiles == 0) {
          $('.wishlist-empty').show();
          $('.wishlist-head').hide();
        } else {
          $('.wishlist-empty').hide();
        }
      });
    }
  };

  var bindUIActions = function () {
    $wishlistButton.click(function (e) {
      e.preventDefault();
      updateWishlist(this);
      animateWishlist(this);
    });
    $addcartButton.click(function (e) {
      e.preventDefault();
      updateWishlist(this);
      animateWishlist(this);
    });
  };

  Wishlist.init = function () {
    bindUIActions();
    activateItemsInWishlist();
    loadWishlist();
  };

}(window.Wishlist = window.Wishlist || {}, jQuery, undefined));