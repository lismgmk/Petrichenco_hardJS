const clearModalState = (state) => {
    const form = document.querySelectorAll('form');
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
        
            

            const formData = new FormData(item);
            


            for (var key of formData.keys()) {
                
                formData.delete(key)
            };



        });
            
    });
};

export default clearModalState;