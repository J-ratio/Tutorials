package com.example.myapplication.data

import com.example.myapplication.R
import com.example.myapplication.model.Affirmation

class DataSource {

    fun loadAffirmation(): List<Affirmation> {
        return listOf<Affirmation>(
            Affirmation(R.string.affirmation1, R.drawable.image1),
            Affirmation(R.string.affirmation2, R.drawable.image1),
            Affirmation(R.string.affirmation3, R.drawable.image1),
            Affirmation(R.string.affirmation4, R.drawable.image1),
            Affirmation(R.string.affirmation5, R.drawable.image1),
            Affirmation(R.string.affirmation6, R.drawable.image1),
            Affirmation(R.string.affirmation7, R.drawable.image1),
            Affirmation(R.string.affirmation8, R.drawable.image1),
            Affirmation(R.string.affirmation9, R.drawable.image1),
            Affirmation(R.string.affirmation10, R.drawable.image1)

        )
    }
}