<?php

namespace App\Imports;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\withValidation;
use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Concerns\SkipsFailures;



class UsersImport implements ToModel, WithHeadingRow, withValidation, SkipsOnFailure
{
    use Importable, SkipsFailures;
    // , SkipsErrors;
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new User([
            'name'     => $row["name"],
            'email'    => $row["email"], 
            'password' => $row["password"],
         ]);
    }

    // public function onError(\Throwable $error){}\

    public function rules(): array
    {
        return [
            '*.email' => ['email','unique:users,email']
        ];
    }

    // public function onFailure(Failure ...$failure){}
    
}
