function addBorder(picture: string[]): string[] {

    let wall = '*'.repeat(picture[0].length + 2);    

    for (let i=0; i < picture.length; i++) {
       picture[i] = '*' + picture[i] + '*';
    }

    return [ wall, ...picture, wall];

}

// console.log(addBorder(["abc", "ded"]));