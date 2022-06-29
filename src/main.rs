//mod GTK_MenuBar;

mod GTK_MenuBar;

extern crate gtk;

use mysql::*;
use mysql::prelude::*;

use gtk::prelude::*;

use gtk::{
    Application, AccelFlags, AccelGroup, ApplicationWindow,
    Button, MenuBar, MenuButton
};

use gtk::ffi::GtkApplication;
use crate::GTK_MenuBar::build_menubar;

fn main() {

    println!("Hello, world!");

    if gtk::init().is_err(){
        panic!("Can't init GTK!");
    }

    /*let window = Window::new(WindowType::Toplevel);
    let label = Label::new(Some("Some text"));


    window.connect_delete_event(|_,_| {gtk::main_quit(); Inhibit(false) });
    window.set_title("Olá profê!");
    window.set_default_size(350, 120);

    window.add(&label);
    window.show_all();*/

    let sgbd_museu = Application::builder().application_id("SGBD Museu").build();
    let menu_museu =
    sgbd_museu.connect_activate(|app| {
        build_menubar(app);
    });

    sgbd_museu.run();

    //gtk::main();


}
