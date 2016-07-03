$(function () {
$('.submenu').hide();
$( '.downmenu' ).hover(function(){
$(this).children('.submenu').slideToggle(300);

});
$('.newCheck').each(
function() {
changeCheckStart($(this));
});
function changeCheck(el){
input = el.find('input').eq(0);

if(el.attr('class').indexOf('newCheckDisabled')==-1){
  if(!input.attr('checked')) {
	el.addClass('newChecked');
	input.attr('checked', true);
		} else {
	el.removeClass('newChecked');
	input.attr('checked', false).focus();
		}
	}
    return true;
}
function changeVisualCheck(input){

var wrapInput = input.parent();
	if(!input.attr('checked')) {
		wrapInput.addClass('newChecked');
	}
	else
	{
		wrapInput.removeClass('newChecked');
	}
}
function changeCheckStart(el){
  try
{
checkName = el.attr('name'),
checkId = el.attr('id'),
checkChecked = el.attr('checked'),
checkDisabled = el.attr('disabled'),
checkTab = el.attr('tabindex'),
checkValue = el.attr('value');
	if(checkChecked)
		el.after("<span class='newCheck newChecked'>"+"<input type='checkbox'"+"name='"+checkName+"'"+"id='"+checkId+"'"+"checked='"+checkChecked+"'"+"value='"+checkValue+"'"+"tabindex='"+checkTab+"' /></span>");
	else
		el.after("<span class='newCheck'>"+"<input type='checkbox'"+	"name='"+checkName+"'"+"id='"+checkId+"'"+ "value='"+checkValue+"'" +	"tabindex='"+checkTab+"'/> </span>");

	if(checkDisabled)
	{
		el.next().addClass('newCheckDisabled');
		el.next().find('input').eq(0).attr('disabled','disabled');
	}
	el.next().bind('mousedown', function(e) { changeCheck($(this));
   });
	el.next().find('input').eq(0).bind('change', function(e) { changeVisualCheck($(this));
  });
	if($.browser.msie)
	{
		el.next().find('input').eq(0).bind('click', function(e) { changeVisualCheck($(this));
  });
	}
	el.remove();
}
catch(e)
{}
    return true;
}
});
