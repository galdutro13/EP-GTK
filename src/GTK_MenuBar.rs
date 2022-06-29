

use gio::prelude::*;
use glib::clone;
use gtk::prelude::*;


use gtk::{AccelFlags, AccelGroup, ApplicationWindow, Button, CheckMenuItem, IconSize, Image, Label, Menu, MenuBar, MenuItem};

use std::env::args;

pub fn build_menubar(application: &gtk::Application){

    let window = ApplicationWindow::builder()
        .application(application)
        .title("Sistema Unificado de Arquiologia")
        .default_width(540)
        .default_height(360)
        .build();


    let menu = Menu::new();
    let accel_group = AccelGroup::new();
    window.add_accel_group(&accel_group);

    let menu_bar = MenuBar::new();
    let import_file = MenuItem::with_label("importar arquivo");
    let quit = MenuItem::with_label("Sair");

    let import_file_Item = MenuItem::new();
    let import_file_Box = gtk::Box::new(gtk::Orientation::Horizontal, 0);
    let import_file_label = Label::new(Some("File"));
    let check_item = CheckMenuItem::with_label("Clique me!");

    import_file_Box.pack_start(&import_file_label, true, true, 0);
    import_file_Item.add(&import_file_Box);

    menu.append(&import_file_Item);
    menu.append(&quit);

    import_file.set_submenu(Some(&menu));
    menu_bar.append(&import_file);

    quit.connect_activate(clone!(@weak window => move |_| {
        window.close();
    }));

    let (key, modifier) = gtk::accelerator_parse("<Primary>Q");
    quit.add_accelerator("activate", &accel_group, key, modifier, AccelFlags::VISIBLE);

    let label = Label::new(Some("Exemplo"));



    let button = Button::with_label("Hey!");

    button.connect_clicked(|_| {
        eprintln!("Clicked!");
    });


    window.add(&button);

    window.show_all();



}