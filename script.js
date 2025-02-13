document.addEventListener('DOMContentLoaded', () => {
    /* ----------------------------------------------------------------
       COMMON ELEMENTS
    ------------------------------------------------------------------*/
    const pixelText    = document.querySelector('.pixel-text');
    const chocolateBox = document.querySelector('.chocolate-box');
    const milkChocolate  = document.querySelector('.milk');
    const whiteChocolate = document.querySelector('.white');
    const dubaiChocolate = document.querySelector('.dubai');
    const pixelFooter = document.querySelector('.pixel-footer');

    const pageWrapper    = document.querySelector('.page-wrapper');
    const footerMsg      = document.querySelector('.footer-msg');
    
    /* ----------------------------------------------------------------
       MILK CHOCOLATE
    ------------------------------------------------------------------*/
    const milkText   = document.querySelector('.milk-text');
    const milkText2  = document.querySelector('.milk-text2');
    const milkText3  = document.querySelector('.milk-text3');
    const milkLetter1 = document.querySelector('.milk-letter1');
    const milkLetter2 = document.querySelector('.milk-letter2');
    
    // Initially attach the first click
    milkChocolate.addEventListener('click', milkFirstClick);
  
    function milkFirstClick() {
      // Hide the other chocolates
      whiteChocolate.classList.add('hidden');
      dubaiChocolate.classList.add('hidden');
      chocolateBox.classList.add('hidden');
      pixelText.classList.add('hidden');
      pixelFooter.classList.add('hidden');
  
      // Show the first text
      milkText.classList.remove('hidden');
  
      // Next step
      milkChocolate.removeEventListener('click', milkFirstClick);
      milkChocolate.addEventListener('click', milkSecondClick);
    }
  
    function milkSecondClick() {
      milkText.classList.add('hidden');
      milkChocolate.classList.remove('milk');
      milkChocolate.classList.add('milk-bite');
      milkText2.classList.remove('hidden');
  
      milkChocolate.removeEventListener('click', milkSecondClick);
      milkChocolate.addEventListener('click', milkThirdClick);
    }
  
    function milkThirdClick() {
      milkText2.classList.add('hidden');
      milkChocolate.classList.remove('milk-bite');
      milkChocolate.classList.add('milk-bite2');
      milkText3.classList.remove('hidden');
  
      milkChocolate.removeEventListener('click', milkThirdClick);
      milkChocolate.addEventListener('click', milkEnvClick);
    }
  
    function milkEnvClick() {
      milkText3.classList.add('hidden');
      milkChocolate.classList.remove('milk-bite2');
      milkChocolate.classList.add('milk-env');
  
      // Show the letters
      milkLetter1.classList.remove('hidden');
      milkLetter2.classList.remove('hidden');
  
      milkChocolate.removeEventListener('click', milkEnvClick);
      milkChocolate.addEventListener('click', milkGoBack);
    }
  
    function milkGoBack() {
      // Return everything
      whiteChocolate.classList.remove('hidden');
      dubaiChocolate.classList.remove('hidden');
      chocolateBox.classList.remove('hidden');
      pixelText.classList.remove('hidden');
      pixelFooter.classList.remove('hidden');
  
      // Revert chocolate
      milkChocolate.classList.remove('milk-env');
      milkChocolate.classList.add('milk');
  
      // Hide letters
      milkLetter1.classList.add('hidden');
      milkLetter2.classList.add('hidden');
      // (Hide last text blocks if needed)
      // milkText3.classList.add('hidden');
  
      // Re-attach first click so we can do it all again
      milkChocolate.removeEventListener('click', milkGoBack);
      milkChocolate.addEventListener('click', milkFirstClick);
    }
  
    /* ----------------------------------------------------------------
       WHITE CHOCOLATE
    ------------------------------------------------------------------*/
    // Grab the text blocks for white
    const whiteText   = document.querySelector('.white-text');
    const whiteText2  = document.querySelector('.white-text2');
    const whiteText3  = document.querySelector('.white-text3');
    const whiteJointText = document.querySelector('.white-joint-text'); 
  
    // Attach first click
    whiteChocolate.addEventListener('click', whiteFirstClick);
  
    function whiteFirstClick() {
      // Hide other chocolates
      milkChocolate.classList.add('hidden');
      dubaiChocolate.classList.add('hidden');
      chocolateBox.classList.add('hidden');
      pixelText.classList.add('hidden');
      pixelFooter.classList.add('hidden');
  
      // Show the first white text
      whiteText.classList.remove('hidden');
  
      // Next
      whiteChocolate.removeEventListener('click', whiteFirstClick);
      whiteChocolate.addEventListener('click', whiteSecondClick);
    }
  
    function whiteSecondClick() {
      whiteText.classList.add('hidden');
      whiteChocolate.classList.remove('white');
      whiteChocolate.classList.add('white-bite'); // define in CSS
      whiteText2.classList.remove('hidden');
  
      whiteChocolate.removeEventListener('click', whiteSecondClick);
      whiteChocolate.addEventListener('click', whiteThirdClick);
    }
  
    function whiteThirdClick() {
      whiteText2.classList.add('hidden');
      whiteChocolate.classList.remove('white-bite');
      whiteChocolate.classList.add('white-bite2'); 
      whiteText3.classList.remove('hidden');
  
      whiteChocolate.removeEventListener('click', whiteThirdClick);
      whiteChocolate.addEventListener('click', whiteFinalClick);
    }
  
    function whiteFinalClick() {
      // Hide the third text
      whiteText3.classList.add('hidden');
      // Switch to some final state or letter
      whiteChocolate.classList.remove('white-bite2');
      whiteChocolate.classList.add('joint');
      whiteJointText.classList.remove('hidden');
  
      // Next: go back to original
      whiteChocolate.removeEventListener('click', whiteFinalClick);
      whiteChocolate.addEventListener('click', whiteGoBack);
    }
  
    function whiteGoBack() {
      // Show everything again
      milkChocolate.classList.remove('hidden');
      dubaiChocolate.classList.remove('hidden');
      chocolateBox.classList.remove('hidden');
      pixelText.classList.remove('hidden');
      pixelFooter.classList.remove('hidden');
  
      // Revert chocolate
      whiteChocolate.classList.remove('joint');
      whiteChocolate.classList.add('white');
  
      // Hide letter
      whiteJointText.classList.add('hidden');
  
      // Re-attach the first click
      whiteChocolate.removeEventListener('click', whiteGoBack);
      whiteChocolate.addEventListener('click', whiteFirstClick);
    }
  
    /* ----------------------------------------------------------------
       DUBAI CHOCOLATE
    ------------------------------------------------------------------*/
    const dubaiText   = document.querySelector('.dubai-text');
    const dubaiText2  = document.querySelector('.dubai-text2');
    const dubaiText3  = document.querySelector('.dubai-text3');
    const dubaiPicText    = document.querySelector('.dubai-pic-1');

    // Attach first click
    dubaiChocolate.addEventListener('click', dubaiFirstClick);
  
    function dubaiFirstClick() {
      // Hide others
      milkChocolate.classList.add('hidden');
      whiteChocolate.classList.add('hidden');
      chocolateBox.classList.add('hidden');
      pixelText.classList.add('hidden');
      pixelFooter.classList.add('hidden');
  
      // Show first dubai text
      dubaiText.classList.remove('hidden');
  
      dubaiChocolate.removeEventListener('click', dubaiFirstClick);
      dubaiChocolate.addEventListener('click', dubaiSecondClick);
    }
  
    function dubaiSecondClick() {
      dubaiText.classList.add('hidden');
      dubaiChocolate.classList.remove('dubai');
      dubaiChocolate.classList.add('dubai-bite'); 
      dubaiText2.classList.remove('hidden');
  
      dubaiChocolate.removeEventListener('click', dubaiSecondClick);
      dubaiChocolate.addEventListener('click', dubaiThirdClick);
    }
  
    function dubaiThirdClick() {
      dubaiText2.classList.add('hidden');
      dubaiChocolate.classList.remove('dubai-bite');
      dubaiChocolate.classList.add('dubai-bite2'); 
      dubaiText3.classList.remove('hidden');
  
      dubaiChocolate.removeEventListener('click', dubaiThirdClick);
      dubaiChocolate.addEventListener('click', dubaiFinalClick);
    }
  
    function dubaiFinalClick() {
      // Hide the third text
      dubaiText3.classList.add('hidden');
      // Some final state
      dubaiChocolate.classList.remove('dubai-bite2');
      dubaiChocolate.classList.add('dubaipic'); 
      dubaiPicText.classList.remove('hidden'); 
  
      dubaiChocolate.removeEventListener('click', dubaiFinalClick);
      dubaiChocolate.addEventListener('click', dubaiGoBack);
    }
  
    function dubaiGoBack() {
      // Show everything again
      milkChocolate.classList.remove('hidden');
      whiteChocolate.classList.remove('hidden');
      chocolateBox.classList.remove('hidden');
      pixelText.classList.remove('hidden');
      pixelFooter.classList.remove('hidden');
  
      // Revert chocolate
      dubaiChocolate.classList.remove('dubaipic');
      dubaiChocolate.classList.add('dubai');
  
      // Hide final pic
      dubaiPicText.classList.add('hidden');
  
      // Re-attach the first click so we can do it again
      dubaiChocolate.removeEventListener('click', dubaiGoBack);
      dubaiChocolate.addEventListener('click', dubaiFirstClick);
    }

    /* ----------------------------------------------------------------
     FOOTER TOGGLE: FULL-SCREEN MESSAGE
    ------------------------------------------------------------------*/
    pixelFooter.addEventListener('click', openMsg);

    function openMsg() {
      // Hide the main page elements
      milkChocolate.classList.add('hidden');
      whiteChocolate.classList.add('hidden');
      dubaiChocolate.classList.add('hidden');
      chocolateBox.classList.add('hidden');
      pixelText.classList.add('hidden');

      // Show the final message
      footerMsg.classList.remove('hidden');

      // Switch to the msgGoBack function on next footer click
      pixelFooter.removeEventListener('click', openMsg);
      pixelFooter.addEventListener('click', msgGoBack);
    }

    function msgGoBack() {
      // Show everything again
      milkChocolate.classList.remove('hidden');
      whiteChocolate.classList.remove('hidden');
      dubaiChocolate.classList.remove('hidden');
      chocolateBox.classList.remove('hidden');
      pixelText.classList.remove('hidden');

      // Hide the final message
      footerMsg.classList.add('hidden');

      // Switch back to openMsg on next click
      pixelFooter.removeEventListener('click', msgGoBack);
      pixelFooter.addEventListener('click', openMsg);
    }

  });