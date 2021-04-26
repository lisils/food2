package com.food.exception;

public class OrderAlreadyCheckoutException extends Exception {

  public OrderAlreadyCheckoutException(String message) {
    super(message);
  }
}
