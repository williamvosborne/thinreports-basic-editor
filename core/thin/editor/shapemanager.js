//  Copyright (C) 2011 Matsukei Co.,Ltd.
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.

goog.provide('thin.editor.ShapeManager');

goog.require('thin.editor.AbstractManager');


/**
 * @param {thin.editor.Layout} layout
 * @constructor
 * @extends {thin.editor.AbstractManager}
 */
thin.editor.ShapeManager = function(layout) {
  goog.base(this, layout);

  /**
   * @type {Array.<number>}
   * @private
   */
  this.identifiers_ = [];
};
goog.inherits(thin.editor.ShapeManager, thin.editor.AbstractManager);


/**
 * @param {string} identifier
 * @return {goog.graphics.Element}
 */
thin.editor.ShapeManager.prototype.getShapeByIdentifier = function(identifier) {
  var index = goog.array.indexOf(this.identifiers_, this.makeKey_(identifier));
  return index != -1 ? this.get()[index] : null;
};


/**
 * @return {Array.<number>}
 */
thin.editor.ShapeManager.prototype.getIdentifiers = function() {
  return this.identifiers_;
};


/** @override */
thin.editor.ShapeManager.prototype.add = function(shape) {
  goog.base(this, 'add', shape);
  this.identifiers_[this.identifiers_.length] = this.makeKey_(shape.getIdentifier());
};


/** @override */
thin.editor.ShapeManager.prototype.set = function(shapes) {
  goog.base(this, 'set', shapes);
  
  delete this.identifiers_;
  this.identifiers_ = [];

  var identifiers = this.identifiers_;

  goog.array.forEach(shapes, function(shape) {
    identifiers[identifiers.length] = this.makeKey_(shape.getIdentifier());
  }, this);
};


/**
 * @return {Array}
 */
thin.editor.ShapeManager.prototype.getCloneIdentifiers = function() {
  return goog.array.clone(this.identifiers_);
};


/**
 * @param {string} identifier
 * @return {number}
 * @private
 */
thin.editor.ShapeManager.prototype.makeKey_ = function(identifier) {
  return Number(identifier.replace(/[^\d]+/g, ''));
};


/** @override */
thin.editor.ShapeManager.prototype.remove = function(shape) {
  goog.base(this, 'remove', shape);
  goog.array.remove(this.identifiers_, this.makeKey_(shape.getIdentifier()));
};


/** @override */
thin.editor.ShapeManager.prototype.clear = function() {
  goog.base(this, 'clear');
  goog.array.clear(this.identifiers_);
};


/** @override */
thin.editor.ShapeManager.prototype.disposeInternal = function() {
  goog.array.forEach(this.get(), function(shape) {
    shape.dispose();
  });
  goog.base(this, 'disposeInternal');
  delete this.identifiers_;
};
