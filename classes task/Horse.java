/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication8;

/**
 *
 * @author moroz
 */
public class Horse extends Animal{
    private String authenticity;
    private String horsetype;

    public String getAuthenticity() {
        return authenticity;
    }

    public String getHorsetype() {
        return horsetype;
    }

    public void setAuthenticity(String authenticity) {
        this.authenticity = authenticity;
    }

    public void setHorsetype(String horsetype) {
        this.horsetype = horsetype;
    }
    
}
