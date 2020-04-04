export const slugify = text => {
    const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;"
    const to = "aaaaaeeeeeiiiiooooouuuunc------"
  
    const newText = text.split('').map((letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)))
  
    return newText
      .toString()                     // Cast to string
      .toLowerCase()                  // Convert the string to lowercase letters
      .trim()                         // Remove whitespace from both sides of a string
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/&/g, '-y-')           // Replace & with 'and'
      .replace(/[^\w-]+/g, '')       // Remove all non-word chars
      .replace(/-+/g, '-');        // Replace multiple - with single -
}

export const truncate = (text, max) => {
    return text.substr(0,max-1)+(text.length > max?' ...':''); 
}

export const getRecents = data => data.map(d => d.title).reverse();

export const getCategories = data => [...new Set(data.map(d => d.genre))];

export const getByGenre = (data, genre) => data.filter(d => d.genreSlug === genre);

export const getItemByGenreAndCategory = (data, title, genre) => data.find(d => slugify(d.title) === title && slugify(d.genre) === genre);

export const groupBy = (state, propriete) => {
	return state.reduce((grouped, obj) => {
		const key = obj[propriete];
		if(!grouped[key]){
			grouped[key] = [];
		}
		grouped[key].push(obj);
		return grouped;
	}, {});
}
