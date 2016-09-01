
# Use like this:
#
# ID=65 ./scripts/books/book-show.sh
#

curl --include --request GET "http://localhost:3000/books/$ID"

# Hardcoded request:
#
# curl --include --request GET "http://localhost:3000/books/65"
