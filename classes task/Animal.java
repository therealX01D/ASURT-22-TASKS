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
public class Animal {
    private String mammelsOrNot; 
    private String Type;//carnivores /herbivorus /omnivorus
    private int currentpop;

    public void setMammelsOrNot(String mammelsOrNot) {
        this.mammelsOrNot = mammelsOrNot;
    }

    public void setType(String Type) {
        this.Type = Type;
    }
 
    public String getMammelsOrNot() {
        return mammelsOrNot;
    }

    public String getType() {
        return Type;
    }
}
