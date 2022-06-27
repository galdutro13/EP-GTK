extern crate gtk;

use mysql::*;
use mysql::prelude::*;

use gtk::prelude::*;
use gtk::{Window, WindowType, Label};

fn main() {

    println!("Hello, world!");

    if gtk::init().is_err(){
        panic!("Can't init GTK!");
    }

    let window = Window::new(WindowType::Toplevel);
    let label = Label::new(Some("Some text"));


    window.connect_delete_event(|_,_| {gtk::main_quit(); Inhibit(false) });
    window.set_title("Olá profê!");
    window.set_default_size(350, 120);

    window.add(&label);
    window.show_all();
    gtk::main();


}
