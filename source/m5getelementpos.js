/**
 * m5GetElementPos
 *
 * @author       nori (norimania@gmail.com)
 * @copyright    5509 (http://5509.me/)
 * @license      The MIT License
 * @link         https://github.com/5509/m5GetElemPosition
 *
 */
;(function($) {
	$.fn.m5GetElementPos = function(options) {
		/* this method will return the number above this;
		    [
		         0: LeftTop,
				 1: CenterTop,
				 2: RightTop,
				 3: LeftCenter,
				 4: CenterCenter,
				 5: RightCenter,
				 6: LeftBottom,
				 7: CenterBottom,
				 8: RightBottom
		    ]
		 */
		var _scrollTop = {
				y: document.body.scrollTop || document.documentElement.scrollTop,
				x: document.body.scrollLeft || document.documentElement.scrollLeft
			},
			 _clientSize =  {
				x: document.body.clientWidth || document.documentElement.clientWidth,
				y: document.body.clientHeight || document.documentElement.clientHeight
			},
			_offset = this.offset(),
			_eRPos = { // element relative position
				x: _offset.left - _scrollTop.x,
				y: _offset.top - _scrollTop.y
			},
			_elementPos,
			_c = $.extend({
				returnNumber: true, // or false
				returnCancel: false,
				callback: null
			}, options);
			
		if ( _eRPos.y < _clientSize.y/3 ) {
			if ( _eRPos.x < _clientSize.x/3 ) {
				_elementPos = _c.returnNumber ? 0 : "LeftTop";
			} else
			if ( _clientSize.x/3 <= _eRPos.x && _eRPos.x <= _clientSize.x/3*2 ) {
				_elementPos =  _c.returnNumber ? 1 : "CenterTop";
			} else {
				_elementPos =  _c.returnNumber ? 2 : "RightTop";
			}
		} else
		if ( _clientSize.y/3 <= _eRPos.y && _eRPos.y <= _clientSize.y/3*2 ) {
			if ( _eRPos.x < _clientSize.x/3 ) {
				_elementPos =  _c.returnNumber ? 3 : "LeftCenter";
			} else
			if ( _clientSize.x/3 <= _eRPos.x && _eRPos.x <= _clientSize.x/3*2 ) {
				_elementPos =  _c.returnNumber ? 4 : "CenterCenter";
			} else {
				_elementPos =  _c.returnNumber ? 5 : "RightCenter";
			}
		} else {
			if ( _eRPos.x < _clientSize.x/3 ) {
				_elementPos =  _c.returnNumber ? 6 : "LeftBottom";
			} else
			if ( _clientSize.x/3 <= _eRPos.x && _eRPos.x <= _clientSize.x/3*2 ) {
				_elementPos =  _c.returnNumber ? 7 : "CenterBottom";
			} else {
				_elementPos =  _c.returnNumber ? 8 : "RightBottom";
			}
		}
		
		$.data(this, "ElementPos", _elementPos);
		if ( _c.callback && typeof _c.callback === "function" ) {
			_c.callback.call(this);
		}
		if ( !_c.returnCancel ) {
			return this;
		}
	}
})(jQuery);