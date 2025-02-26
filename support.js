class Answer
{
    constructor(text)
    {
        this.Text = text;
    }
}

let redirectToPage = (pageName, params) =>{
    try
    {
        let currentPage = window.location.href;
        let currentPageArray = currentPage.split('/');
    
        let myPage = currentPageArray[currentPageArray.length - 1];
        if(pageName != myPage && pageName != undefined)
        {
            if(params == undefined)
            {
                params = "";
            }
            currentPageArray.splice(currentPageArray.length - 1, 1);
            let destinationPage = currentPageArray.join('/') + `/${pageName}?${params}`;
            
            window.location.href = destinationPage;
        }
    }
    catch(error)
    {
        console.log(`Error in support.js: ${error.message}`);
    }
}