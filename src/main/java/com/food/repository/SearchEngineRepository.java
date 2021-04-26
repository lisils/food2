package com.food.repository;

import com.food.model.SearchEngine;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SearchEngineRepository extends MongoRepository<SearchEngine, String> {

}
