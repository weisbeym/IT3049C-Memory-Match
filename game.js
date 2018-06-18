"use strict";

// TODO: Get a reference to our gameboard element using the DOM APIs

// Placeholder for the first selected tile of each turn
let selectedTile = null;

// Global value to maintain number of turns
let turnCount = 0;

/**
 * 1d array containing objects that represent the game board state.
 * For this I would recommend using an object to represent each tile:
 *
 * {
 *   image: "", // Path to the image file
 *   matched: false // Start with value "false" then change to true once matched
 * }
 *
 * NOTE: Using this method will always have the tiles in the same position. If you want to
 * take an extra challenge, you could create "base" tiles, then randomly assign their position
 * in the boardState. This is not a requirement for the assignment, but could be cool to try out
 */
const boardState = [];

function selectTile() {
  // In this function, "this" represent the clicked on "div" element

  // TODO: Get the tile represented in our boardState array
  // const tile =

  // Already matched
  if (tile.matched) {
    return;
  }

  // TODO: Remove the "hidden" class on the img child of this tile element

  // If an unmatched tile is already selected
  if (selectedTile) {
    // TODO: Update turnCount

    /*
     * TODO: Check if the selectedTile and this tile have the same image
     * 
     * If they do, then leave them "revealed", update the "matched" property for
     * both tiles in the "boardState", and check to see if the game is over (meaning
     * all tiles are matched)
     * 
     * If they do not match, then set them both back to hidden
     * 
     */

    // TIP: In both cases, you'll want to clear out the "selectedTile" holder as this is the end of our turn

    return;
  }

  // TODO: Set "selectedTile" holder with current tile
}

function drawBoard() {
  // Use this function to dynamically generate the game board
  /**
   * I would recommend using a for-loop and in each
   * iteration, create the element and append it to gameboard element referenced
   * from line 3
   */
  /**
   * An implementation might look like this:
   *
   * for (let i = 0; i < boardState.length; i += 1) {
   *   // TODO: Create tile "div" and add the "tile" class (see style.css)
   *
   *   // TODO: Set a retrievable property on the div to reference in selectTile function
   *   // TIP: I would look into the setAttribute method and using "data-id" property
   *
   *   // TODO: Create "img" with the source being the current boardState tile "image" property
   *
   *   // TODO: Append the img to the div tile
   *
   *   // TODO: Append the div tile to the gameboard
   * }
   *
   */
  /**
   * At the end of this function our gameboard element will now contain dynamically
   * generated HTML elements that look something like this:
   *
   * <div class="tile" onclick="OurSelectTileFunction" data-id="WhateverIndexThisWasCreatedIn">
   *   <img src="TheSourceFromOurBoardState" />
   * </div>
   */
}

// This is an optional step if you want to take on the extra challenge
// function reset() {
// TODO: Clear the gameboard element

// TODO: Reset all the boardState tiles to have "false" for their matched properties
// TODO: Clear the selectedTile holder
// TODO: Reset turnCount

// TODO: Draw the game board again since we cleared out the element
// }

// Immediately draw the game board when this file is loaded and parsed by the browser
drawBoard();
