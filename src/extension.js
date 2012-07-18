
/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */
/*
 * extension.js
 * Copyright (C) 2012 Dean <dean.fenster@gmail.com>
 * 
 * Terminal in UserMenu is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the
 * Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Terminal in UserMenu is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along
 * with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const St = imports.gi.St;
const Main = imports.ui.main;
const Lang = imports.lang;
const Shell = imports.gi.Shell;
const GLib = imports.gi.GLib;
const PopupMenu = imports.ui.popupMenu;

let button, menu;


function init(metadata) {
    menu = Main.panel._statusArea.userMenu.menu;
}

function _buttonActivate() {
    Main.overview.hide();
    let app = Shell.AppSystem.get_default().lookup_app('gnome-terminal.desktop');
    app.activate();
}

function enable() {
    button = new PopupMenu.PopupMenuItem("Terminal");
    button.connect('activate', Lang.bind(button, _buttonActivate));
    menu.addMenuItem(button, 5);
}

function disable() {
    if (button) {
        button.destroy();
    }
}

