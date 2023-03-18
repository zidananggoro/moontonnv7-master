<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movie = [
            [
                'name' => 'The Batman',
                'slug' => 'the-batman',
                'category' => 'Superheroes',
                'vidio_url' => 'https://short.ink/elESgnOGY',
                'thumbnail' => 'https://i.pinimg.com/564x/fb/9a/49/fb9a49532b660507af3ae646a72dd6b1.jpg',
                'rating' => 4.5,
                'is_featured' => 1,
            ],
            [
                'name' => 'Aquaman',
                'slug' => 'aquaman',
                'category' => 'Superheroes',
                'vidio_url' => 'https://short.ink/YH30xe8IH',
                'thumbnail' => 'https://i.pinimg.com/564x/6b/41/a1/6b41a14dd81c2822134398657f5bf80b.jpg',
                'rating' => 4.5,
                'is_featured' => 0,
            ],
             [
                'name' => 'No Time To Die',
                'slug' => 'no-time-to-die',
                'category' => 'Detective',
                'vidio_url' => 'https://short.ink/3LnuTFLL_',
                'thumbnail' => 'https://i.pinimg.com/564x/cb/39/40/cb39407adad37b0c65fc2ec075636e72.jpg',
                'rating' => 4.5,
                'is_featured' => 0,
            ],
            

        ];
        Movie::insert($movie);
    }
}
