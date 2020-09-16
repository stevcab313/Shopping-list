$(function(){
    $('#js-shopping-list-form').submit(function(event){

        event.preventDefault();
    
        const addedItemSubmit = $('#shopping-list-entry').val();
    
            $('.shopping-list').append(`<li>
            <span class="shopping-item">${addedItemSubmit}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`)
        
        });
    
        
    
        $(".shopping-list").on('click','.shopping-item-toggle',function(event){
            const targItem = $(event.target).closest('li').find('.shopping-item');
            $(targItem).toggleClass('shopping-item__checked');
        })
    
        $(".shopping-list").on('click','.shopping-item-delete',(event) =>{
            $(event.target).closest('li').remove();
        });
