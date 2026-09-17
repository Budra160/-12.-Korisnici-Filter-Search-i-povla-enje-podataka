export function createBar(){
    return `<div class="top-bar">
                        <div class="input-wrapper">
                        <label for="sort">Sortiraj po:</label>
                            <select
                                name="sort",
                                id="sort"
                            >
                                <option value="ime-az">Ime A-Z</option>
                                <option value="ime-za">Ime Z-A</option>
                            </select>
                        </div>

                        <div class="input-wrapper">
                            <label for="search">Pretraži po:</label>
                            <input
                                type="text",
                                name="search",
                                id="search"
                            >
                        </div>
                        
                    </div> `
}