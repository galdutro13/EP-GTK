extern crate gtk;

use mysql::*;
use mysql::prelude::*;

use gtk::prelude::*;

use gtk::{Application, ApplicationWindow, Button, MenuBar, MenuButton};
use gtk::ffi::GtkApplication;
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
        let window = ApplicationWindow::builder()
            .application(app)
            .title("Sistema Unificado de Arquiologia")
            .default_width(540)
            .default_height(360)
            .build();


        let button = Button::with_label("Hey!");
        button.connect_clicked(|_| {
            eprintln!("Clicked!");
        });


        window.add(&button);
        window.add(&menu_bar);
        window.show_all();



    });

    sgbd_museu.run();

    //gtk::main();


}
